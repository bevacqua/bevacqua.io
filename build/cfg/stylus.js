'use strict';

module.exports = function(release){
    return {
        expand: true,
        cwd: views,
        src: '**/*.jade',
        dest: 'bin/views',
        ext: '.html',
        options: {
            compress: release
        }
    };
};