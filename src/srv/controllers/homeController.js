'use strict';

var controller = module.exports = require('../Controller.js')('home');

controller.registerRoutes = function(app){
    app.get('/', controller.getIndex);
};

controller.getIndex = function(req,res,next){
    controller.renderView(res, 'index.html');
};