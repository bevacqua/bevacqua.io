'use strict';

var path = require('path');

module.exports = {
    lint: function(base, glob){
        return {
            options: {
                jshintrc: path.join(base, '.jshintrc')
            },
            files: {
                src: glob
            }
        };
    },
    files: function(){
        return [];
    }
};