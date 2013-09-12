'use strict';

var path = require('path');
var walk = require('walk');
var logger = require('../../lib/logger');

module.exports = {
    load: function(app, done){
        var walker = walk.walk(__dirname);

        walker.on('file', function(root, stat, next){
            var relative = path.relative(__dirname, root);

            if (!relative) { // this folder shouldn't contain any controllers
                return next();
            }

            logger.debug('loading ' + relative + ' controller', stat.name);

            var module = '.' + path.sep + path.join(relative, stat.name);

            require(module).registerRoutes(app);
            next();
        });

        walker.on('end', done);
    }
};