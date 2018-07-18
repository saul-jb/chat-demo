// A hook that logs service method before, after and error
// See https://github.com/winstonjs/winston for documentation
// about the logger.
const winston = require("winston");

let date = new Date().toISOString();

const logFormat = winston.format.printf(function (info) {
	return `${date}-${info.level}: ${JSON.stringify(info.message, null, 4)}`;
});

const logger = winston.createLogger({
	level: "info",
	format: winston.format.json(),
	transports: [
		new winston.transports.File({ filename: "error.log", level: "error" }),
		new winston.transports.File({ filename: "combined.log" })
	]
});

if (process.env.NODE_ENV !== "production") {
	logger.add(new winston.transports.Console({
		format: winston.format.combine(winston.format.colorize(), logFormat)
	}));
}

// To see more detailed messages, uncomment the following line
// logger.level = 'debug';

module.exports = function () {
	return context => {
		// This debugs the service call and a stringified version of the hook context
		// You can customize the mssage (and logger) to your needs
		logger.debug(`${context.type} app.service('${context.path}').${context.method}()`);

		if (typeof context.toJSON === "function") {
			logger.debug("Hook Context", JSON.stringify(context, null, "  "));
		}

		if (context.error) {
			logger.error(context.error);
		}
	};
};
