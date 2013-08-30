'use strict';

module.exports = function(release){
    return {
        expand: true,
        cwd: 'src/client/views',
        src: '**/*.jade',
        dest: 'bin/views',
        ext: '.html',
        options: {
            pretty: !release,
            basedir: 'src/client/views'
        }
    };
};