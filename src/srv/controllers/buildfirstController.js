'use strict';

var controller = module.exports = require('../Controller.js')('buildfirst');

controller.registerRoutes = function(app){
    app.get('/buildfirst', controller.getView('landing'));
    app.get('/buildfirst/resources', controller.getView('resources'));
};