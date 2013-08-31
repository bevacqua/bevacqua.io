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
            css: cfg.stylus
        },
        jade: {
            debug: cfg.jade(false),
            release: cfg.jade(true)
        },
        copy: {
            favicon: cfg.img.favicon,
            images: cfg.img.images
        },
        cssmin: cfg.cssmin,
        uglify: {
            js: {

            }
        },
        rev: cfg.rev,
        watch: {
        }
    });

    grunt.registerTask('css:debug', ['clean:css', 'stylus']);
    grunt.registerTask('css:release', ['clean:css', 'stylus', 'cssmin:release', 'rev:css']);

    grunt.registerTask('js:debug', ['clean:js']);
    grunt.registerTask('js:release', ['clean:js', 'rev:js']);

    grunt.registerTask('img', ['clean:favicon', 'clean:images', 'copy:favicon', 'copy:images']);

    grunt.registerTask('views:debug', ['clean:views', 'jade:debug']);
    grunt.registerTask('views:release', ['clean:views', 'jade:release']);

    grunt.registerTask('assets:debug', ['css:debug', 'js:debug', 'img', 'views:debug']);
    grunt.registerTask('assets:release', ['css:release', 'js:release', 'img', 'views:release']);
};