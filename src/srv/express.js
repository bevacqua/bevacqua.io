'use strict';

var port = 3000;
var debug = true;

var _ = require('lodash');
var express = require('express');
var logger = require('../lib/logger');
var app = express();

logger.info('running: node app', _.rest(process.argv, 2));

require('./controllers')(app);

app.locals.settings['x-powered-by'] = false;

if (debug) {
    app.use(express.logger({
        format: ':method :url :status',
        stream: logger.stream('debug')
    }));
}

app.use(express.compress());
app.use(express.bodyParser());

app.use(app.router);

var statics = process.cwd() + '/bin/public';

app.use(express.favicon(statics + '/img/favicon.ico'));
app.use(express.static(statics, { maxAge: 86400000 }));

app.listen(port, function(){
    logger.info('express listening on port', port);
});