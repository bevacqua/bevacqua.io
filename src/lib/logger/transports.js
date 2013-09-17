'use strict';

var logger = require('winston');
var moment = require('moment');
var pushover = require('winston-pushover').Pushover;
var papertrail = require('winston-papertrail').Papertrail;

logger.remove(logger.transports.Console);

logger.add(logger.transports.Console, {
    timestamp: timestamps,
    colorize: true,
    level: conf('LOG_LEVEL')
});

logger.add(pushover, {
    level: conf('PUSHOVER_LEVEL'),
    userKey: conf('PUSHOVER_USER_KEY'),
    token: conf('PUSHOVER_API_TOKEN')
});

logger.add(papertrail, {
    host: conf('PAPERTRAIL_HOST'),
    port: conf('PAPERTRAIL_PORT'),
    level: conf('PAPERTRAIL_LEVEL')
});

function timestamps(){
    return moment().format();
}
