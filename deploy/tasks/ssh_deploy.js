'use strict';

var chalk = require('chalk');
var util = require('util');
var path = require('path');
var exec = require('./lib/exec.js');
var sshCredentials = require('./lib/sshCredentials.js');
var ssh = require('./lib/ssh.js');

module.exports = function(grunt){

    grunt.registerTask('ssh_deploy', function(name){

        grunt.config.requires('pkg.version');

        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide an instance name.',
                'e.g: ' + chalk.yellow('grunt ssh_deploy:name')
            ].join('\n'));
        }

        var done = this.async();

        sshCredentials(name, function (c) {

            if (!c) {
                grunt.fatal('This instance is refusing SSH connections for now');
            }

            var local = process.cwd();
            var remote = '/srv/rsync/io/latest/';
            var folder = path.relative(path.dirname(local), local);
            var remoteSync = remote + folder + '/';
            var exclude ='.rsyncignore';
            var user = conf('AWS_RSYNC_USER');
            var v = grunt.config('pkg.version');

            grunt.log.writeln('Deploying %s to %s using rsync over ssh...', chalk.blue('v' + v), chalk.cyan(c.id));

            exec('rsync -vaz --stats --progress --delete --exclude-from "%s" -e "ssh -o StrictHostKeyChecking=no -i %s" %s %s@%s:%s', [
                exclude, c.privateKeyFile, local, user, c.host, remote
            ], deploy);

            function deploy () {
                var dest = '/srv/apps/io/v/' + v;
                var target = '/srv/apps/io/current';
                var commands = [
                    util.format('sudo cp -r %s %s', remoteSync, dest),
                    util.format('sudo npm --prefix %s install --production', dest),
                    util.format('sudo ln -sfn %s %s', dest, target),
                    // 'pm2 reload all' // TODO: configure pm2 and upstart
                ];
                ssh(commands, name, done);
            }
        });

    });
};
