'use strict';

var logger = require('./lib/logger');
var cfg = require('./build/cfg');

module.exports = function(grunt){
    // load all npm tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        clean: {
            views: ['bin/views']
        },
        jshint: {
            client: cfg.jshint('src/client/js', ['src/client/js', '!src/client/js/vendor']),
            server: cfg.jshint('', ['src/server', 'app.js']),
            support: cfg.jshint('', ['Gruntfile.js', 'build'])
        },
        stylus: {

        },
        jade: {
            debug: cfg.jade(false),
            release: cfg.jade(true)
        },
        concat: {
            css: {

            },
            js: {

            }
        },
        uglify: {
            js: {

            }
        },
        watch: {
            js: {

            },
            html: {

            },
            css: {
                
            }
        }
    });

    grunt.registerTask('build', 'Compiles the application', ['jade:release']);
};