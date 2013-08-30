'use strict';

var express = require('express'),
    logger = require('./lib/logger'),
    routing = require('./routing.js'),
    app = express(),
    port = 3000;

routing(app.router);

app.locals.settings['x-powered-by'] = false;
app.use(express.bodyParser());
app.use(app.router);
app.listen(port, function(){
    logger.info('express listening on port', port);
});