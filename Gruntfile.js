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
            server: cfg.jshint('src/srv', ['src/srv', 'app.js']),
            support: cfg.jshint('src/srv', ['Gruntfile.js', 'build'])
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
            jshint_client: { tasks: ['jshint:client'], files: ['src/client/js/**/*.js'] },
            jshint_server: { tasks: ['jshint:server'], files: ['src/srv/**/*.js', 'app.js'] },
            jshint_support: { tasks: ['jshint:support'], files: ['Gruntfile.js', 'build/**/*.js'] },
            img: { tasks: ['img'], files: ['src/client/favicon.ico', 'src/client/img/**/*.{png,jpg,gif}'] },
            css: { tasks: ['css:debug'], files: ['src/client/css/**/*.styl'] },
            views: { tasks: ['views:debug'], files: ['src/client/views/**/*.jade'] }
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