const { createLogger, format, transports } = require("winston");

const { combine, timestamp, prettyPrint, colorize, align, printf } = format;

const logger = createLogger({
  format: combine(
    colorize(),
    timestamp(),
    prettyPrint(),
    align(),
    printf((info) => printFormat(info))
  ),
  exitOnError: false
});

logger.add(new transports.Console());

const getLogType = (message) => {
  const status = Number(message.split("=").pop().replace(/ .*/, ""));

  if (status < 400 || isNaN(status)) {
    return "info";
  }

  return "error";
};

const printFormat = (info) => {
  const { timestamp, level, message, ...args } = info;
  const ts = timestamp.slice(0, 19).replace("T", " ");

  return `[${level}]: ${ts} ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ""}`;
};

const stream = {
  write: (message) => {
    const type = getLogType(message);

    logger.log({ level: type, message });
  }
};

module.exports = { logger };
