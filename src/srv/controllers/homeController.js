'use strict';

var controller = module.exports = require('../Controller.js')('home');

controller.registerRoutes = function(app){
    app.get('/', controller.getView('landing'));
};