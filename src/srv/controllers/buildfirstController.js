'use strict';

var controller = module.exports = require('../Controller.js')('buildfirst');

controller.registerRoutes = function(app){
    app.get('/buildfirst', controller.getLanding);
};

controller.getLanding = function(req,res){
    controller.renderView(res, 'landing.html');
};