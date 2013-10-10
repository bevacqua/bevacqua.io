'use strict';

var path = require('path');
var nconf = require('nconf');
var moment = require('moment');
var cwd = path.resolve(__dirname, '..');

global.conf = nconf.get.bind(nconf);
global.conf.cwd = cwd;

global.require_cwd = function(file){
    var absolute = path.join(cwd, file);
    return require(absolute);
};

moment.defaultFormat = 'Do HH:mm:ss';

global.logger = require('../src/lib/logger');
