'use strict';

var path = require('path');
var chalk = require('chalk');
var exec = require('./lib/exec.js');
var lookup = require('./lib/lookupEC2.js');

module.exports = function(grunt){

    grunt.registerTask('ssh_deploy', function(name){

        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide an instance name.',
                'e.g: ' + chalk.yellow('grunt ssh_deploy:name')
            ].join('\n'));
        }

        var done = this.async();

        lookup(name, function (instance) {
            var pem = path.join('deploy/private', name + '.pem');
            var dns = instance.PublicDnsName;
            var local = '.';
            var remote = '/srv/apps/io/rsync';
            var exclude ='.rsyncignore';

            grunt.log.writeln('Deploying to %s using rsync...', instance.InstanceId);

            exec('rsync -larve "ssh -i %s" %s ec2-user@%s:%s --stats --progress --delete --exclude-from "%s"', [
                pem, local, dns, remote, exclude
            ], done);
        });

    });
};
