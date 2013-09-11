'use strict';

var nconf = require('nconf');
var path = require('path');
var user = path.join(__dirname, 'private/user.json');
var dev = path.join(__dirname, 'private/dev.json');
var defaults = path.join(__dirname, 'defaults.json');

nconf.argv();                     // command-line arguments
nconf.env();                      // environment-specific configuration
nconf.file('user', user);         // user-provided values, if any
nconf.file('dev', dev);           // dev-environment settings, if any
nconf.file('defaults', defaults); // default values if they weren't overwritten

// expose global conf convenience method
global.conf = module.exports = nconf.get.bind(nconf);
