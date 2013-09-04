'use strict';

var nconf = require('nconf');
var path = require('path');
var user = path.join(__dirname, 'private/user.json');
var dev = path.join(__dirname, 'private/dev.json');
var defaults = path.join(__dirname, 'defaults.json');

// order of precedence:

// argv     - process arguments
// env      - environment-specific configuration
// user     - user-provided values, if any
// dev      - dev-environment settings, if any
// defaults - default values if they weren't overwritten
nconf.argv().env().file(user).file(dev).file(defaults);

// expose global conf convenience method
global.conf = module.exports = nconf.get.bind(nconf);