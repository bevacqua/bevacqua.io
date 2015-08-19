'use strict';

var winston = require('winston');

process.on('uncaughtException', uncaughtException);

function uncaughtException (err) {
  var cause = err.stack || err;

  winston.warn('Uncaught exception crashed process\n', cause, logged);

  function logged () {
    process.exit(1);
  }
}
