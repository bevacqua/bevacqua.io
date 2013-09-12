'use strict';

require('./env');

var path = require('path');
var forky = require('forky');
var logger = require('./src/lib/logger');
var app = path.join(__dirname, 'app.js');

forky(app);
forky.log = logger.debug.bind(logger, 'cluster:');

process.on('uncaughtException', function(err){
    logger.error('Fatal uncaught exception crashed cluster', err.stack || err, function () {
        process.exit(1);
    });
});