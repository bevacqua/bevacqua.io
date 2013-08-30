'use strict';

var controller = module.exports = require('../Controller.js')();

controller.registerRoutes = function(app){
    app.get('/', controller.getIndex);
};

controller.getIndex = function(req,res,next){
    res.end(200);
};