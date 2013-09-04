'use strict';

var _ = require('lodash');
var assets = require('../assets');

module.exports = {
    clean: {
        all: 'bin',
        views: 'bin/views',
        js: 'bin/public/js',
        css: 'bin/public/css',
        images: 'bin/public/img',
        tmp_sprite: 'bin/.tmp/sprite',
        after_uglify: ['bin/public/js/**/*.js', '!bin/public/js/all.js']
    },
    jshint: {
        client: assets.js.lint('src/client/js', ['src/client/js/**/*.js', '!src/client/js/vendor/**/*.js']),
        server: assets.js.lint('src/srv', ['src/srv', 'app.js']),
        support: assets.js.lint('src/srv', ['Gruntfile.js', 'build'])
    },
    stylus: {
        all: {
            options: {
                'include css': true,
                paths: ['bower_components']
            },
            files: { 'bin/public/css/all.css': ['src/client/css/all.styl', 'bin/.tmp/sprite/*.css'] }
        }
    },
    jade: {
        debug: assets.jade(false),
        release: assets.jade(true)
    },
    copy: _.assign(assets.img.copy, assets.js.copy),
    sprite: {
        houses: assets.img.sprite('houses', 'ho')
    },
    smushit: {
        all: {
            src: 'bin/public/img/**/*.{png,jpg,gif}'
        }
    },
    cssmin: {
        release: {
            files: { 'bin/public/css/all.css': 'bin/public/css/all.css' },
            options: {
                keepSpecialComments: 0
            }
        }
    },
    uglify: {
        js: {
            files: { 'bin/public/js/all.js': 'bin/public/js/**/*.js' },
            options: {
                preserveComments: false
            }
        }
    },
    rev: {
        css: { files: { src: 'bin/public/css/all.css' } },
        js: { files: { src: 'bin/public/js/**/*.js' } }
    }
};