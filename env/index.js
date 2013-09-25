'use strict';

require('./globals.js');

var path = require('path');
var util = require('util');
var nconf = require('nconf');
var moment = require('moment');
var pkg = require_cwd('package.json');
var loading = util.format('%s - Loading configuration', moment().format());

process.stdout.write(loading);

nconf.use('memory');
nconf.argv();
nconf.env();
nconf.set('BUILD_VERSION', pkg.version);

var env = nconf.get('NODE_ENV') || 'development';
var envText = util.format(' for %s...', env);

process.stdout.write(envText);

file('user');
file(env);
file('defaults', false);

console.log('done');

function file (name, secure) {
    var location = secure === false ? '.' : 'private';
    var filename = util.format('%s/%s.json', location, name);
    var filepath = path.join(__dirname, filename);

    nconf.file(name, filepath);
}
