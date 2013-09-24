'use strict';

module.exports = {
    copy: {
        images: {
            expand: true,
            cwd: 'src/client/img',
            dest: 'bin/public/img',
            src: ['**/*.{png,jpg,gif}', '!sprite/**/*.{png,jpg,gif}']
        },
        favicon: {
            src: 'src/client/img/favicon.ico',
            dest: 'bin/public/favicon.ico'
        }
    },
    sprite: function(type, short){
        return {
            src: 'src/client/img/sprite/' + type + '/**/*.{png,jpg,gif}',
            destImg: 'bin/public/img/sprite/' + type + '.png',
            destCSS: 'bin/.tmp/sprite/' + type + '.css',
            imgPath: '/img/sprite/' + type + '.png',
            cssOpts: {
                cssClass: function (item) {
                    var prefix = short ? short + '-' : '';
                    return '.' + prefix + item.name + ':before';
                }
            },
            engine: 'gm',
            imgOpts: {
                format: 'png'
            }
        };
    }
};
