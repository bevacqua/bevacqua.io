'use strict';

var util = require('util');
var chalk = require('chalk');
var moment = require('moment');
var assets = require('../assets');

module.exports = {
    jshint: {
        client: assets.js.lint('src/client/js', ['src/client/js/**/*.js', '!src/client/js/vendor/**/*.js']),
        client_support: assets.js.lint('src/client/js', ['test/client']),
        server: assets.js.lint('src/srv', ['src/srv', 'src/lib', 'app.js']),
        server_support: assets.js.lint('src/srv', ['Gruntfile.js', 'build', 'deploy', 'test/server'])
    },
    mochaTest: {
        options: {
            reporter: 'spec'
        },
        unit: {
            src: ['test/server/unit/**/*.js']
        }
    },
    karma: {
        unit_once: {
            singleRun: true,
            reporters: ['progress'],
            frameworks: ['mocha'],
            browsers: ['PhantomJS'],
            options: {
                files: ['test/client/unit/**/*.js']
            }
        },
        unit_background: {
            background: true,
            reporters: ['progress'],
            frameworks: ['mocha'],
            browsers: ['PhantomJS'],
            options: {
                files: ['test/client/unit/**/*.js']
            }
        }
    },
    watch: {
        options: {
            // spawn: false,
            dateFormat: function () {
                grunt.task.run('play:success');

                return util.format('\n%s Waiting for changes...', moment().format());
            }
        },
        rebuild: { tasks: ['build:rebuild'], files: ['Gruntfile.js', 'build/**/*.js'] },
        test_client: { tasks: ['jshint:client', 'karma:unit_background:run'], files: ['src/client/js/**/*.js', 'test/client/**/*.js'] },
        test_server: { tasks: ['jshint:server', 'mochaTest:unit'], files: ['src/srv/**/*.js', 'app.js', 'test/server/**/*.js'] },
        jshint_client_support: { tasks: ['jshint:client_support'], files: ['test/client/**/*.js'] },
        jshint_server_support: { tasks: ['jshint:server_support'], files: ['Gruntfile.js', 'build/**/*.js', 'deploy/**/*.js', 'test/server/**/*.js'] },
        images: { tasks: ['images:debug'], files: ['src/client/img/**/*.{png,jpg,gif,ico}'] },
        css: { tasks: ['css:debug'], files: ['src/client/css/**/*.styl', 'bin/.tmp/sprite/*.css', 'bower_components/**/*.css'] },
        js_sources: { tasks: ['copy:js_sources'], files: ['src/client/js/**/*.js'] },
        js_bower: { tasks: ['copy:js_bower_debug'], files: ['bower_components/**/*.js'] },
        views: { tasks: ['views:debug'], files: ['src/client/views/**/*.jade'] },
        livereload: { options: { livereload: true }, files: ['bin/public/**/*.{css,js}','bin/views/**/*.html'] }
    },
    nodemon: {
        dev: {
            options: {
                file: 'build/nodemon.js'
            }
        }
    },
    concurrent: {
        dev: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['watch', 'nodemon:dev']
        }
    },
    play: {
        success: { file: 'build/sound/success.mp3' }
    }
};
