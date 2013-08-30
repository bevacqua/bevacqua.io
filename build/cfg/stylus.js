'use strict';

module.exports = function(release){
    return {
        expand: true,
        cwd: 'src/client/css',
        src: '**/*.styl',
        dest: 'bin/public/css',
        ext: '.css',
        options: {
            compress: release
        }
    };
};