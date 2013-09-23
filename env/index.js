'use strict';

require('./globals.js');

var path = require('path');
var util = require('util');
var nconf = require('nconf');
var moment = require('moment');
var pkg = require_cwd('package.json', __dirname);

nconf.argv();
nconf.env();

var env = nconf.get('NODE_ENV') || 'development';
var loading = util.format('%s - Loading configuration for %s...', moment().format(), env);

process.stdout.write(loading);

file('user');
file(env);
file('defaults', false);

nconf.set('BUILD_VERSION', pkg.version);

console.log('done');

function file (name, secure) {
    var location = secure === false ? '.' : 'private';
    var filename = util.format('%s/%s.json', location, name);
    var filepath = path.join(__dirname, filename);

    nconf.file(name, filepath);
}
