'use strict';

var express = require('express'),
    logger = require('./lib/logger'),
    app = express(),
    port = 3000;

app.locals.settings['x-powered-by'] = false;
app.use(express.bodyParser());
app.use(app.router);
app.listen(port, function(){
    logger.info('express listening on port', port);
});