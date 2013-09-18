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

add(pushover, conf('PUSHOVER_ENABLED'), {
    level: conf('PUSHOVER_LEVEL'),
    userKey: conf('PUSHOVER_USER_KEY'),
    token: conf('PUSHOVER_API_TOKEN')
});

add(papertrail, conf('PAPERTRAIL_ENABLED'), {
    host: conf('PAPERTRAIL_HOST'),
    port: conf('PAPERTRAIL_PORT'),
    level: conf('PAPERTRAIL_LEVEL')
});

function add (transport, enabled, options) {
    if (enabled) { logger.add(transport, options); }
}

function timestamps(){
    return moment().format();
}
