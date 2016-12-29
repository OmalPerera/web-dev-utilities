(function () {

  module.exports = function (winston) {

    var loggerLevel = 'debug';

    var logger = new winston.Logger({
      levels: {
        debug: 1,
        warn: 2,
        error: 3,
        success: 4,
      },
      colors: {
        debug: 'blue',
        warn: 'yellow',
        error: 'red',
        success: 'success',
      },
      transports: [
        new (winston.transports.Console)({
          level: loggerLevel,
          colorize: true,
        }),
      ],
      exitOnError: false,
    });

    return logger;
  };

}());
