'use strict';

require('./env');

var cluster = require('cluster');
var logger = require('./src/lib/logger');

process.on('uncaughtException', function(err){

    if (cluster.isWorker) {
        logger.warn('Uncaught exception crashed worker', err.stack || err, function () {
            require('forky').disconnect();
        });
    } else {
        logger.error('Fatal uncaught exception crashed app', err.stack || err, function () {
            process.exit(1);
        });
    }
});

require('./src/srv/express.js');