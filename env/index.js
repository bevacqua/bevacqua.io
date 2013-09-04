'use strict';

var nconf = require('nconf');
var path = require('path');
var dev = path.join(__dirname, 'dev_sensitive.json');
var defaults = path.join(__dirname, 'defaults.json');

nconf.argv().env().file(dev).file(defaults);

module.exports = nconf.get.bind(nconf);