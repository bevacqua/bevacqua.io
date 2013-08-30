'use strict';

var logger = module.exports = require('winston');
var moment = require('moment');

function getTime(){
    return moment().format('Do HH:mm:ss');
}

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    timestamp: getTime,
    colorize: true,
    level: "debug"
});