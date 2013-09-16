'use strict';

var util = require('util');
var chalk = require('chalk');
var exec = require('./lib/exec.js');
var lookup = require('./lib/lookupEC2.js');

module.exports = function(grunt){

    grunt.registerTask('ssh_cmd', function(name){

        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide an instance name.',
                'e.g: ' + chalk.yellow('grunt ssh_deploy:name')
            ].join('\n'));
        }

        var done = this.async();

        lookup(name, function (instance) {
            var dns = instance.PublicDnsName;
            var command = util.format('ssh -i deploy/private/%s.pem ec2-user@%s', name, dns);
            var colored = chalk.magenta(command);

            grunt.log.writeln('Connect to the %s instance using:', chalk.cyan(instance.InstanceId));
            grunt.log.writeln(colored);

            done();
        });

    });
};
