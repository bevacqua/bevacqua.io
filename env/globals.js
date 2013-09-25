'use strict';

var path = require('path');
var nconf = require('nconf');
var moment = require('moment');
var cwd = process.cwd();

global.conf = module.exports = nconf.get.bind(nconf);

global.require_cwd = function(file){
    var relative = path.join(cwd, file);
    return require(relative);
};

moment.defaultFormat = 'Do HH:mm:ss';
