'use strict';

var controller = module.exports = require('../Controller.js')('home');

controller.registerRoutes = function(app){
    app.get('/', controller.getLanding);
};

controller.getLanding = function(req,res){
    controller.renderView(res, 'landing.html');
};