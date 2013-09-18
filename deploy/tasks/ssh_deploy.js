'use strict';

var chalk = require('chalk');
var exec = require('./lib/exec.js');
var sshCredentials = require('./lib/sshCredentials.js');

module.exports = function(grunt){

    grunt.registerTask('ssh_deploy', function(name){

        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide an instance name.',
                'e.g: ' + chalk.yellow('grunt ssh_deploy:name')
            ].join('\n'));
        }

        var done = this.async();

        sshCredentials(name, function (c) {

            if (!c) {
                grunt.fatal('The %s instance is refusing SSH connections for now', chalk.yellow(name));
            }

            var local = process.cwd();
            var remote = '/srv/rsync/';
            var exclude ='.rsyncignore';
            var user = conf('AWS_RSYNC_USER');

            grunt.log.writeln('Deploying to %s using rsync...', chalk.cyan(c.id));

            exec('rsync -ravz --chmod=ugo=rwX --stats --progress --delete --exclude-from "%s" -e "ssh -o StrictHostKeyChecking=no -i %s" %s %s@%s:%s', [
                exclude, c.privateKeyFile, local, user, c.host, remote
            ], done);

            // then ssh:
            // sudo mv /srv/rsync/io /srv/apps/io/{v}
            // cd /srv/apps/io/{v}
            // npm install --production

            // set up forever or upstart or something. figure out way to reload on deploys.
        });

    });
};
