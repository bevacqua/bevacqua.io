'use strict';

var port = 3000;
var debug = true;

var express = require('express');
var logger = require('../lib/logger');
var app = express();
var statics = process.cwd() + '/bin/public';

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

app.use(express.favicon(statics + '/img/favicon.ico'));
app.use(express.static(statics, { maxAge: 86400000 }));

app.listen(port, function(){
    logger.info('express listening on port', port);
});