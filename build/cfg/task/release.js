'use strict';

module.exports = {
    rev: {
        css: { files: { src: 'bin/public/css/all.css' } },
        js: { files: { src: 'bin/public/js/**/*.js' } }
    },
    bump: {
        options: {
            files: ['package.json', 'bower.json'],
            commitFiles: ['package.json', 'bower.json'],
            pushTo: 'origin'
        }
    },
    changelog: {
        options: {
            editor: 'sublime -w'
        }
    }
};