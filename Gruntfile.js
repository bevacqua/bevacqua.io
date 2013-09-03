'use strict';

var _ = require('lodash');
var cfg = require('./build/cfg');

module.exports = function(grunt){
    // load all npm tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        clean: {
            all: 'bin',
            views: 'bin/views',
            js: 'bin/public/js',
            css: 'bin/public/css',
            images: 'bin/public/img',
            tmp_sprite: 'bin/.tmp/sprite',
            after_uglify: ['bin/public/js/**/*.js', '!bin/public/js/all.js']
        },
        jshint: {
            client: cfg.js.lint('src/client/js', ['src/client/js/**/*.js', '!src/client/js/vendor/**/*.js']),
            server: cfg.js.lint('src/srv', ['src/srv', 'app.js']),
            support: cfg.js.lint('src/srv', ['Gruntfile.js', 'build'])
        },
        stylus: {
            all: {
                options: {
                    'include css': true,
                    paths: ['bower_components']
                },
                files: { 'bin/public/css/all.css': ['src/client/css/all.styl', 'bin/.tmp/sprite/*.css'] }
            }
        },
        jade: {
            debug: cfg.jade(false),
            release: cfg.jade(true)
        },
        copy: _.assign(cfg.img.copy, cfg.js.copy),
        sprite: {
            houses: cfg.img.sprite('houses', 'ho')
        },
        smushit: {
            all: {
                src: 'bin/public/img/**/*.{png,jpg,gif}'
            }
        },
        cssmin: {
            release: {
                files: { 'bin/public/css/all.css': 'bin/public/css/all.css' },
                options: {
                    keepSpecialComments: 0
                }
            }
        },
        uglify: {
            js: {
                files: { 'bin/public/js/all.js': 'bin/public/js/**/*.js' },
                options: {
                    preserveComments: false
                }
            }
        },
        rev: {
            css: { files: { src: 'bin/public/css/all.css' } },
            js: { files: { src: 'bin/public/js/**/*.js' } }
        },
        watch: {
            rebuild: { tasks: 'build:debug', files: ['Gruntfile.js', 'build/**/*.js'] },
            jshint_client: { tasks: ['jshint:client'], files: ['src/client/js/**/*.js'] },
            jshint_server: { tasks: ['jshint:server'], files: ['src/srv/**/*.js', 'app.js'] },
            jshint_support: { tasks: ['jshint:support'], files: ['Gruntfile.js', 'build/**/*.js'] },
            images: { tasks: ['images'], files: ['src/client/img/**/*.{png,jpg,gif,ico}'] },
            css: { tasks: ['css:debug'], files: ['src/client/css/**/*.styl', 'bin/.tmp/sprite/*.css', 'bower_components/**/*.css'] },
            js: { tasks: ['js:debug'], files: ['src/client/js/**/*.js', 'bower_components/**/*.js'] },
            views: { tasks: ['views:debug'], files: ['src/client/views/**/*.jade'] },
            livereload: { options: { livereload: true }, files: ['bin/public/**/*.{css,js}'] }
        },
        nodemon: {
            dev: {
                options: {
                    file: 'app.js'
                }
            }
        },
        concurrent: {
            dev: {
                tasks: ['watch', 'nodemon:dev'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    // todo: node (mon?) livereload, unit tests, screen shot integration test diffs, stylus linter?

    function alias (name, tasks) {
        grunt.registerTask(name, tasks.split(' '));
    }

    alias('images:debug', 'clean:images copy:images sprite');
    alias('images:release', 'images:debug smushit:all');

    alias('css:debug', 'clean:css stylus:all');
    alias('css:release', 'clean:css stylus:all cssmin:release rev:css');

    alias('js:debug', 'clean:js copy:js_sources copy:js_bower_debug');
    alias('js:release', 'clean:js copy:js_sources uglify:js clean:after_uglify copy:js_bower_release rev:js');

    alias('views:debug', 'clean:views jade:debug');
    alias('views:release', 'clean:views jade:release');

    alias('build:debug', 'images:debug css:debug js:debug views:debug');
    alias('build:release', 'images:release css:release js:release views:release');

    alias('dev', 'jshint build:debug concurrent:dev');
};