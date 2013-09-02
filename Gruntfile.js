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
            favicon: 'bin/public/favicon.ico',
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
            favicon: {
                src: 'src/client/favicon.ico',
                dest: 'bin/public/favicon.ico'
            },
            images: {
                expand: true,
                cwd: 'src/client/img',
                dest: 'bin/public/img',
                src: ['**/*.{png,jpg,gif}', '!sprite/**/*.{png,jpg,gif}']
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
            images: { tasks: ['images'], files: ['src/client/favicon.ico', 'src/client/img/**/*.{png,jpg,gif}'] },
            css: { tasks: ['css:debug'], files: ['src/client/css/**/*.styl', 'bin/.tmp/sprite/*.css'] },
            views: { tasks: ['views:debug'], files: ['src/client/views/**/*.jade'] }
        }
    });

    // todo: node (mon?) livereload, js flow, unit tests, stylus linter?

    grunt.registerTask('images:debug', ['clean:favicon', 'clean:images', 'copy:favicon', 'copy:images', 'sprite']);
    grunt.registerTask('images:release', ['images:debug', 'smushit:all']);

    grunt.registerTask('css:debug', ['clean:css', 'stylus:all']);
    grunt.registerTask('css:release', ['clean:css', 'stylus:all', 'cssmin:release', 'rev:css']);

    grunt.registerTask('js:debug', ['clean:js']);
    grunt.registerTask('js:release', ['clean:js', 'rev:js']);

    grunt.registerTask('views:debug', ['clean:views', 'jade:debug']);
    grunt.registerTask('views:release', ['clean:views', 'jade:release']);

    grunt.registerTask('assets:debug', ['images:debug', 'css:debug', 'js:debug', 'views:debug']);
    grunt.registerTask('assets:release', ['images:release', 'css:release', 'js:release', 'views:release']);

    grunt.registerTask('dev', ['jshint', 'assets:debug', 'watch']);
};