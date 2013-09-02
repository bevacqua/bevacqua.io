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
            images: 'bin/public/img'
        },
        jshint: {
            client: cfg.jshint('src/client/js', ['src/client/js']),
            server: cfg.jshint('src/srv', ['src/srv', 'app.js']),
            support: cfg.jshint('src/srv', ['Gruntfile.js', 'build'])
        },
        stylus: {
            css: {
                options: {
                    'include css': true,
                    paths: ['bower_components']
                },
                files: { 'bin/public/css/all.css': 'src/client/css/all.styl' }
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
                src: 'src/client/img',
                dest: 'bin/public/img'
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
            img: { tasks: ['img'], files: ['src/client/favicon.ico', 'src/client/img/**/*.{png,jpg,gif}'] },
            css: { tasks: ['css:debug'], files: ['src/client/css/**/*.styl'] },
            views: { tasks: ['views:debug'], files: ['src/client/views/**/*.jade'] }
        }
    });

    // todo: node (mon?) livereload, js flow, sprites, unit tests, stylus linter?

    grunt.registerTask('css:debug', ['clean:css', 'stylus']);
    grunt.registerTask('css:release', ['clean:css', 'stylus', 'cssmin:release', 'rev:css']);

    grunt.registerTask('js:debug', ['clean:js']);
    grunt.registerTask('js:release', ['clean:js', 'rev:js']);

    grunt.registerTask('img', ['clean:favicon', 'clean:images', 'copy:favicon', 'copy:images']);

    grunt.registerTask('views:debug', ['clean:views', 'jade:debug']);
    grunt.registerTask('views:release', ['clean:views', 'jade:release']);

    grunt.registerTask('assets:debug', ['css:debug', 'js:debug', 'img', 'views:debug']);
    grunt.registerTask('assets:release', ['css:release', 'js:release', 'img', 'views:release']);

    grunt.registerTask('dev', ['jshint', 'assets:debug', 'watch']);
};