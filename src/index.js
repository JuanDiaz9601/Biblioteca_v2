const express = require("express");
const { logger } = require("./utils/logger.util");
const { connect } = require("./db/db");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.listen(process.env.PORT, async () => {
  logger.info("server init");
  await connect();
});
