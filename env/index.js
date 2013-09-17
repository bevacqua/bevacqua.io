'use strict';

var nconf = require('nconf');
var path = require('path');
var moment = require('moment');
var user = path.join(__dirname, 'private/user.json');
var aws = path.join(__dirname, 'private/aws.json');
var dev = path.join(__dirname, 'private/dev.json');
var defaults = path.join(__dirname, 'defaults.json');
var cwd = process.cwd();

nconf.argv();                     // command-line arguments
nconf.env();                      // environment-specific configuration
nconf.file('user', user);         // user-provided values, if any
nconf.file('aws', aws);           // AWS deployment settings, if any
nconf.file('dev', dev);           // dev-environment settings, if any
nconf.file('defaults', defaults); // default values if they weren't overwritten

global.conf = module.exports = nconf.get.bind(nconf);

global.require_cwd = function(file, dirname){
    var relative = path.resolve(dirname, cwd, file);
    return require(relative);
};

var pkg = require_cwd('package.json', __dirname);

nconf.set('BUILD_VERSION', pkg.version);

moment.defaultFormat = 'Do HH:mm:ss';
