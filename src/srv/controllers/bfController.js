'use strict';

var controller = module.exports = require('../Controller.js')('bf');
var logger = require('../../lib/logger');

controller.registerRoutes = function(app){
    app.get('/bf/:key', controller.expandShortLink);
};

controller.expandShortLink = function(req, res){
    logger.debug(req.params.key);
    res.end();
};