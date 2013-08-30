'use strict';

var express = require('express');
var logger = require('../lib/logger');
var app = express();
var port = 3000;
var statics = process.cwd() + '/bin/public';

require('./controllers')(app);

app.locals.settings['x-powered-by'] = false;

app.use(express.compress());
app.use(express.bodyParser());

app.use(app.router);

app.use(express.static(statics, { maxAge: 86400000 }));
app.use(express.favicon(statics + '/favicon.ico'));

app.listen(port, function(){
    logger.info('express listening on port', port);
});