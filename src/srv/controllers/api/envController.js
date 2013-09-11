'use strict';

var path = require('path');
var pkg = require_cwd('./package.json', __dirname);

var controller = module.exports = require('../ApiController.js')();

controller.registerRoutes = function(app){
    app.get(controller.v + '/env', controller.getEnv);
    app.get(controller.v + '/env/version', controller.getVersion);
};

controller.getEnv = function(req, res){
    res.json({ env: conf('NODE_ENV') });
};

controller.getVersion = function(req, res){
    res.json({ version: pkg.version });
};
