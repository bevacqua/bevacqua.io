'use strict';

var winston = require('winston');

function handler (err, req, res, next) {
  var result;
  var info = err.stack ? '\n' + err.stack : ': ' + err;

  if (req.xhr) {
    result = { error: 'Internal Server Error!' };
  } else {
    result = 'Internal Server Error!';
  }

  res.status(500).end(result);
  winston.info('Error handled on request for %s%s', req.url, info);
}

module.exports = handler;
