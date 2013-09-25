'use strict';

module.exports = {
    copy: {
        other: {
            expand: true,
            cwd: 'src/client/statics',
            src: '**/*',
            dest: 'bin/public'
        }
    }
};
