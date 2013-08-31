'use strict';

var binStyles = 'bin/public/css/vendor/';
var binScripts = 'bin/public/js/vendor/';

module.exports = {
    styles: {
        files: [
            { src: 'bower_components/normalize-css/normalize.css', dest: binStyles + 'normalize.css' }
        ]
    },
    scripts: {
        files: [
        ]
    }
};