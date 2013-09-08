'use strict';

var _ = require('lodash');
var cfg = require('./build/cfg');

module.exports = function(grunt){

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig(_.assign(cfg.build, cfg.dev, cfg.env));

    // todo: unit tests, screen shot integration test diffs, lint css?
    // deploy task to auto-deploy to production servers, create grunt task grunt-pushover

    function alias (name, tasks) {
        grunt.registerTask(name, tasks.split(' '));
    }

    alias('images:debug', 'clean:images copy:images sprite');
    alias('images:release', 'images:debug imagemin:all');

    alias('css:debug', 'clean:css stylus:all');
    alias('css:release', 'clean:css stylus:all cssmin:release rev:css');

    alias('js:debug', 'clean:js copy:js_sources copy:js_bower_debug');
    alias('js:release', 'clean:js copy:js_sources uglify:js clean:after_uglify copy:js_bower_release rev:js');

    alias('views:debug', 'clean:views jade:debug');
    alias('views:release', 'clean:views jade:release');

    alias('build:debug', 'images:debug css:debug js:debug views:debug');
    alias('build:rebuild', 'build:debug play:success');
    alias('build:release', 'images:release css:release js:release views:release');

    alias('dev', 'clean jshint build:rebuild concurrent:dev');
    alias('dev_setup', 'clean pem_decrypt:dev');
};