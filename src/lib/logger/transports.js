'use strict';

var logger = require('winston');
var moment = require('moment');
var pushover = require('winston-pushover').Pushover;

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

function timestamps(){
    return moment().format('Do HH:mm:ss');
}