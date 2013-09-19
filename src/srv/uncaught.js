'use strict';

var logger = require('../lib/logger');

process.on('uncaughtException', function(err){
    var cause = err.stack || err;

    logger.warn('Uncaught exception crashed worker', cause, function () {
        process.exit(1);
    });
});
