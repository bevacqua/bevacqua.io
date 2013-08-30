'use strict';

var logger = require('./lib/logger');

module.exports = function(grunt){
    // load all npm tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        clean: {
            views: ['bin/views']
        },
        jshint: {
            client: {

            },
            server: {

            }
        },
        stylus: {

        },
        jade: {
            release: {
                files: {
                    'bin/views/home.html': 'src/client/views/home.jade'
                }
            }
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
        }
    });

    grunt.registerTask('build', 'Compiles the application', ['jade:release']);
};