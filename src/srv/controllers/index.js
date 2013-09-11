'use strict';

var fs = require('fs');
var path = require('path');
var walk = require('walk');
var logger = require('../../lib/logger.js');

module.exports = function(app){
    var walker = walk.walk(__dirname);

    walker.on('file', function(root, stat, next){
        var relative = path.relative(__dirname, root);

        if (!relative) { // this folder shouldn't contain any controllers
            return next();
        }

        var module = '.' + path.sep + path.join(relative, stat.name);

        logger.debug('loading ' + relative + ' controller', stat.name);

        require(module).registerRoutes(app);
        next();
    });
};