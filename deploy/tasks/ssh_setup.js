'use strict';

module.exports = function(grunt){

    grunt.registerTask('ssh_setup', function(name){

        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide an instance name.',
                'e.g: ' + chalk.yellow('grunt ssh_deploy:name')
            ].join('\n'));
        }
        // installs node, nginx, users, /srv/apps/io/rsync
    });
};
