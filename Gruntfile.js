'use strict';

var _ = require('lodash');
var cfg = require('./build/cfg');

require('./env'); // load globals

module.exports = function(grunt){

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig(_.merge.apply({}, _.values(cfg)));

    // todo: cluster, unit tests, screen shot diffs, integration tests?
    // todo: register to (travis) ci
    // todo: deploy task actually deploying to staging/production servers

    function alias (name, tasks) {
        grunt.registerTask(name, tasks.split(' '));
    }

    alias('images:debug', 'clean:images copy:images sprite');
    alias('images:release', 'images:debug imagemin:all');

    alias('css:debug', 'clean:css stylus:all csslint');
    alias('css:release', 'clean:css stylus:all cssmin:release rev:css');

    alias('js:debug', 'clean:js copy:js_sources copy:js_bower_debug jshint');
    alias('js:release', 'clean:js copy:js_sources uglify:js clean:after_uglify copy:js_bower_release rev:js');

    alias('views:debug', 'clean:views jade:debug');
    alias('views:release', 'clean:views jade:release');

    alias('build:debug', 'images:debug css:debug js:debug views:debug bump-only:build');
    alias('build:rebuild', 'build:debug play:success');
    alias('build:release', 'images:release css:release js:release views:release bump:patch');

    alias('test', 'jshint csslint');

    alias('dev', 'clean build:rebuild concurrent:dev');
    alias('dev_setup', 'clean pem_decrypt:dev dev');

    alias('ci', 'clean build:release test');
    alias('deploy', 'clean build:release test' /* and actually deploy it */);

    alias('default', 'dev');
};