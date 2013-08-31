'use strict';

module.exports = function(release){
    var views = 'src/client/views';
    
    return {
        expand: true,
        cwd: views,
        src: '**/*.jade',
        dest: 'bin/views',
        ext: '.html',
        options: {
            pretty: !release,
            basedir: views,
            data: function(){
                return {
                    stylesheets: require('./stylesheets.js')(),
                    scripts: require('./scripts.js')
                };
            }
        }
    };
};