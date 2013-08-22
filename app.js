'use strict';

var express = require('express'),
    logger = require('./lib/logger'),
    app = express(),
    port = 3000;

app.listen(port, function(){
    logger.info("express listening on port", port);
});