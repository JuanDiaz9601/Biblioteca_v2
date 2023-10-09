// connect to mongodb
const mongoose = require('mongoose');
const { logger } = require('../utils/logger.util');

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: process.env.MONGODB_DB_NAME,
        });
        logger.info('Connected to MongoDB');
    } catch (error) {
        logger.error(error);
    }
}

module.exports = { connect };