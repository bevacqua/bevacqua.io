'use strict';

require('./globals.js');

var path = require('path');
var util = require('util');
var nconf = require('nconf');
var moment = require('moment');
var defaults = require('./defaults.json');
var pkg = require_cwd('package.json', __dirname);

nconf.argv();
nconf.env();
nconf.defaults(defaults);

var env = nconf.get('NODE_ENV');
var loading = util.format('%s - Loading configuration for %s...', moment().format(), env);

process.stdout.write(loading);

file('user');
file(env); // environment-specific configuration

nconf.set('BUILD_VERSION', pkg.version);

console.log('done');

function file (name) {
    var filename = util.format('private/%s.json', name);
    var filepath = path.join(__dirname, filename);

    nconf.file(name, filepath);
}
