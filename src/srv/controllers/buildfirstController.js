'use strict';

var controller = module.exports = require('../Controller.js')('buildfirst');

controller.registerRoutes = function(app){
    app.get('/buildfirst', controller.getIndex);
};

controller.getIndex = function(req,res,next){
    controller.renderView(res, 'index.html');
};