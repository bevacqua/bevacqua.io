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
            favicon: cfg.img.favicon.dest,
            images: cfg.img.images.dest
        },
        jshint: {
            client: cfg.jshint('src/client/js', ['src/client/js', '!src/client/js/vendor']),
            server: cfg.jshint('', ['src/server', 'app.js']),
            support: cfg.jshint('', ['Gruntfile.js', 'build'])
        },
        stylus: {
            debug: cfg.stylus(false),
            release: cfg.stylus(true)
        },
        jade: {
            debug: cfg.jade(false),
            release: cfg.jade(true)
        },
        copy: {
            favicon: cfg.img.favicon,
            images: cfg.img.images
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
};