'use strict';

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
            var dns = instance.PublicDnsName;

            grunt.log.writeln('ssh -i deploy/private/' + name + '.pem ec2-user@' + dns);

            done();
        });

    });
};
