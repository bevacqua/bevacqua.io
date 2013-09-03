'use strict';

var logger = module.exports = require('winston');
var moment = require('moment');

logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    timestamp: function(){
        return moment().format('Do HH:mm:ss');
    },
    colorize: true,
    level: 'debug'
});

module.exports.stream = function(level){
    return {
        write: function(data, encoding){
            var message = data.replace(/\n+$/, ''); // remove trailing breaks
            logger[level](message);
        }
    };
};