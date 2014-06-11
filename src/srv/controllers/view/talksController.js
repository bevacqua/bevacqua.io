'use strict';

var controller = module.exports = new (require('../ViewController.js'))('talks');

controller.registerRoutes = function(app){
    app.get('/talks', controller.getView('/landing'));
    app.get('/talks/frontend-ops', controller.getView('frontend-ops'));
};
