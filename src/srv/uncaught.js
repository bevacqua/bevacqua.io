'use strict';

var cluster = require('cluster');
var logger = require('../lib/logger');

process.on('uncaughtException', function(err){
    var cause = err.stack || err;

    if (cluster.isWorker) {
        disconnect(cause);
    } else {
        fail(cause);
    }
});

function disconnect (cause) {
    logger.warn('Uncaught exception crashed worker', cause, function () {
        require('forky').disconnect();
    });
}

function fail (cause) {
    logger.error('Fatal uncaught exception crashed app', cause, function () {
        process.exit(1);
    });
}