'use strict';

var logger = require('winston');
var moment = require('moment');
var pushover = require('winston-pushover').Pushover;
var papertrail = require('winston-papertrail').Papertrail;
var stdout = logger.transports.Console;

logger.remove(stdout);

add(stdout, 'CONSOLE_ENABLED', {
    timestamp: timestamps,
    colorize: true,
    level: conf('CONSOLE_LEVEL')
});

add(pushover, 'PUSHOVER_ENABLED', {
    level: conf('PUSHOVER_LEVEL'),
    userKey: conf('PUSHOVER_USER_KEY'),
    token: conf('PUSHOVER_API_TOKEN')
});

add(papertrail, 'PAPERTRAIL_ENABLED', {
    host: conf('PAPERTRAIL_HOST'),
    port: conf('PAPERTRAIL_PORT'),
    level: conf('PAPERTRAIL_LEVEL')
});

function add (transport, enabled, options) {
    var on = conf(enabled);
    if (on) { logger.add(transport, options); }

    var name = enabled.split('_')[0].toLowerCase();

    console.log(timestamps(), '-', name, 'transport', on ? 'enabled' : 'off');
}

function timestamps(){
    return moment().format();
}
