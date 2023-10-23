const express = require("express");
const { logger } = require("./utils/logger.util");
const { connect } = require("./db/db");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/v1", require("./routers/users.route"));
app.use("/api/v1", require("./routers/books.route"));

app.listen(process.env.PORT, async () => {
  logger.info(`server init on port: ${process.env.PORT}`);
  await connect();
});
