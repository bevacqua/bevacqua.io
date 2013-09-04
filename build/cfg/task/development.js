'use strict';

module.exports = {
    watch: {
        rebuild: { tasks: ['build:rebuild'], files: ['Gruntfile.js', 'build/**/*.js'] },
        jshint_client: { tasks: ['jshint:client', 'play:success'], files: ['src/client/js/**/*.js'] },
        jshint_server: { tasks: ['jshint:server', 'play:success'], files: ['src/srv/**/*.js', 'app.js'] },
        jshint_support: { tasks: ['jshint:support', 'play:success'], files: ['Gruntfile.js', 'build/**/*.js'] },
        images: { tasks: ['images', 'play:success'], files: ['src/client/img/**/*.{png,jpg,gif,ico}'] },
        css: { tasks: ['css:debug', 'play:success'], files: ['src/client/css/**/*.styl', 'bin/.tmp/sprite/*.css', 'bower_components/**/*.css'] },
        js_sources: { tasks: ['copy:js_sources', 'play:success'], files: ['src/client/js/**/*.js'] },
        js_bower: { tasks: ['copy:js_bower_debug', 'play:success'], files: ['bower_components/**/*.js'] },
        views: { tasks: ['views:debug', 'play:success'], files: ['src/client/views/**/*.jade'] },
        livereload: { options: { livereload: true }, files: ['bin/public/**/*.{css,js}','bin/views/**/*.html'] }
    },
    nodemon: {
        dev: {
            options: {
                file: 'build/nodemon.js'
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
    },
    play: {
        success: { file: 'build/sound/success.mp3' }
    }
};