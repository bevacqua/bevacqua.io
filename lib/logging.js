'use strict';

var moment = require('moment');
var winston = require('winston');
var env = require('./env');
var stdout = winston.transports.Console;

winston.remove(stdout);

if (env('CONSOLE_ENABLED')) {
  winston.add(stdout, {
    timestamp: timestamps,
    colorize: true,
    level: env('CONSOLE_LEVEL')
  });
}

function stream (level) {
  return { write: write };
  function write (data) {
    var message = data.replace(/\n+$/, ''); // remove trailing breaks
    winston[level](message);
  }
}

function timestamps () {
  return moment().format('MM:ss');
}

module.exports = {
  stream: stream
};
