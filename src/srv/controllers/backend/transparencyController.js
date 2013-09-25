'use strict';

var controller = module.exports = require('../Controller.js')();

controller.registerRoutes = function(app){
    app.get('/source', controller.getSource);
};

controller.getSource = function(req, res){
    res.redirect('https://github.com/bevacqua/io');
};
