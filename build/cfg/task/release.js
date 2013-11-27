'use strict';

var emoji = require('emoji-random');

module.exports = {
    imagemin: {
        sprite: {
            files: [{
                expand: true,
                src: 'bin/public/img/sprite/**/*.{png,jpg,gif}'
            }]
        },
        non_sprite: {
            files: [{
                expand: true,
                src: [
                    'bin/public/img/**/*.{png,jpg,gif}',
                    '!bin/public/img/sprite/**/*.{png,jpg,gif}'
                ]
            }]
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
            files: {
                'bin/public/js/all.js': [
                    'bin/public/js/vendor/**/*.js',
                    'bin/public/js/**/*.js'
                ],
            },
            options: {
                preserveComments: false
            }
        }
    },
    rev: {
        css: { files: { src: 'bin/public/css/all.css' } },
        js: { files: { src: 'bin/public/js/**/*.js' } },
        images: { files: { src: 'bin/public/**/*.{jpg,png,gif}' } }
    },
    usemin: {
        html: 'bin/{public,views}/**/*.html',
        css: 'bin/public/**/*.css',
        jade: 'bin/.tmp/views/**/*.jade',
        options: {
            assetsDirs: ['bin/public'],
            patterns: {
                jade: [[
                    /meta\(.*content=['"]http:\/\/bevacqua\.io([^"']+\.(png|jpg|gif))["']/gm,
                    'Update meta tags image content'
                ], [
                    /encodeURIComponent\(['"]http:\/\/bevacqua\.io([^"']+\.(png|jpg|gif))["']\)/gm,
                    'Update any images in strings to be encoded'
                ]]
            }
        }
    },
    bump: {
        options: {
            files: ['package.json', 'bower.json'],
            updateConfigs: ['pkg'],
            commitFiles: ['package.json', 'bower.json', 'CHANGELOG.markdown'],
            commitMessage: 'Release v%VERSION% ' + emoji.random(),
            pushTo: 'origin'
        }
    },
    changelog: {
        options: {
            dest: 'CHANGELOG.markdown',
            editor: '$EDITOR'
        }
    }
};
