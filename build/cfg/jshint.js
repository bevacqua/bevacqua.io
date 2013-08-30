'use strict';

var path = require('path');

module.exports = function(base, glob){
    return {
        options: {
            jshintrc: path.join(base, '.jshintrc')
        },
        files: {
            src: glob
        }
    };
};