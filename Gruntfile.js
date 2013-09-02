'use strict';

var logger = require('./src/lib/logger');
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
            tmp_sprite: 'bin/.tmp/sprite'
        },
        jshint: {
            client: cfg.jshint('src/client/js', ['src/client/js/**/*.js', '!src/client/js/vendor/**/*.js']),
            server: cfg.jshint('src/srv', ['src/srv', 'app.js']),
            support: cfg.jshint('src/srv', ['Gruntfile.js', 'build'])
        },
        stylus: {
            all: {
                options: {
                    'include css': true,
                    paths: ['bower_components']
                },
                files: { 'bin/public/css/all.css': ['bin/.tmp/sprite/*.css', 'src/client/css/all.styl'] }
            }
        },
        jade: {
            debug: cfg.jade(false),
            release: cfg.jade(true)
        },
        copy: {
            images: {
                expand: true,
                cwd: 'src/client/img',
                dest: 'bin/public/img',
                src: ['**/*.{png,jpg,gif,ico}', '!sprite/**/*.{png,jpg,gif,ico}']
            },
            js_debug: {
                expand: true,
                cwd: 'bower_components',
                src: '**/*.js',
                dest: 'bin/public/js/vendor'
            },
            js_release: {
                expand: true,
                cwd: 'bower_components',
                src: ['**/*.min.js', '**/*.min.js.map'],
                dest: 'bin/public/js/vendor'
            }
        },
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
                files: { 'bin/public/css/all.css': 'bin/public/css/all.css' }
            }
        },
        uglify: {
            js: {

            }
        },
        rev: {
            css: {
                files: { src: 'bin/public/css/all.css' }
            }
        },
        watch: {
            jshint_client: { tasks: ['jshint:client'], files: ['src/client/js/**/*.js'] },
            jshint_server: { tasks: ['jshint:server'], files: ['src/srv/**/*.js', 'app.js'] },
            jshint_support: { tasks: ['jshint:support'], files: ['Gruntfile.js', 'build/**/*.js'] },
            images: { tasks: ['images'], files: ['src/client/img/**/*.{png,jpg,gif,ico}'] },
            css: { tasks: ['css:debug'], files: ['src/client/css/**/*.styl', 'bin/.tmp/sprite/*.css'] },
            views: { tasks: ['views:debug'], files: ['src/client/views/**/*.jade'] }
        }
    });

    // todo: node (mon?) livereload, js flow, unit tests, stylus linter?

    function alias (name, tasks) {
        grunt.registerTask(name, tasks.split(' '));
    }

    alias('images:debug', 'clean:images copy:images sprite');
    alias('images:release', 'images:debug smushit:all');

    alias('css:debug', 'clean:css stylus:all');
    alias('css:release', 'clean:css stylus:all cssmin:release rev:css');

    alias('js:debug', 'clean:js copy:js_debug');
    alias('js:release', 'clean:js rev:js js_debug');

    alias('views:debug', 'clean:views jade:debug');
    alias('views:release', 'clean:views jade:release');

    alias('build:debug', 'images:debug css:debug js:debug views:debug');
    alias('build:release', 'images:release css:release js:release views:release');

    alias('dev', 'jshint build:debug watch');
};