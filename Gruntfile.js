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
            client: cfg.jshint('src/client/js', ['src/client/js']),
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
            images: cfg.img.images,
            vendor_styles: cfg.bower.styles,
            vendor_scripts: cfg.bower.scripts
        },
        concat: {
            css: ['bin/public/css/vendor/**/*.css','bin/public/css/**/*.css'],
            js: {

            }
        },
        uglify: {
            js: {

            }
        },
        rev: {

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

    grunt.registerTask('css:debug', ['clean:css', 'copy:vendor_styles', 'stylus:debug']);
    grunt.registerTask('css:release', ['clean:css', 'copy:vendor_styles', 'stylus:release', 'concat:css']);
};