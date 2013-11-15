'use strict';

var jadeContextService = require('../service/jadeContextService.js');

require('./util/initJadeContext.js');

module.exports = function(release){
    var views = 'bin/.tmp/views';

    return {
        expand: true,
        cwd: views,
        src: '**/*.jade',
        dest: 'bin/views',
        ext: '.html',
        options: {
            pretty: !release,
            basedir: views,
            data: jadeContextService.getContext
        }
    };
};

module.exports.copy = {
    jade: {
        expand: true,
        cwd: 'src/client/views',
        dest: 'bin/.tmp/views',
        src: ['**/*.jade']
    }
};
