'use strict';

var fs = require('fs');
var path = require('path');
var logger = require('../../lib/logger.js');

module.exports = function(app){
    fs.readdirSync(__dirname).forEach(function(file){
        var module = path.join(__dirname, file);
        if (module !== __filename){ // `index.js` is not a controller
            logger.debug('loading controller', file);
            require(module).registerRoutes(app);
        }
    });
};