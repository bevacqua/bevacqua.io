'use strict';

var _ = require('lodash');
var path = require('path');
var express = require('express');
var app = express();
var controllers = require('./controllers');
var logger = require('../lib/logger');

var port = conf('PORT');
var debug = conf('BUILD_DISTRIBUTION') === 'debug';

logger.info('executing:', process.argv.join(' '));
logger.info('environment: %s, distribution: %s', conf('NODE_ENV'), conf('BUILD_DISTRIBUTION'));

controllers.load(app, function(){
    app.locals.settings['x-powered-by'] = false;

    if (debug){
        app.use(express.logger({
            format: ':method :url :status',
            stream: logger.stream('debug')
        }));
    }

    app.use(express.compress());
    app.use(express.bodyParser());

    app.use(app.router);

    var statics = path.join(process.cwd(), 'bin/public');

    app.use(express.favicon(path.join(statics, '/img/favicon.ico')));
    app.use(express.static(statics, debug ? {} : { maxAge: 86400000 }));

    app.listen(port, function(){
        logger.info('express listening on port', port);
    });
});
