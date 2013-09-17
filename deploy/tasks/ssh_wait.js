'use strict';

var chalk = require('chalk');
var moment = require('moment');
var sshCredentials = require('./lib/sshCredentials.js');
var ssh = require('./lib/ssh.js');

module.exports = function(grunt){

    grunt.registerTask('ssh_wait', function(name){

        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide an instance name.',
                'e.g: ' + chalk.yellow('grunt ssh_wait:name')
            ].join('\n'));
        }

        var done = this.async();

        function waitForDNS () {

            sshCredentials(name, function (c) {
                if (!c) {
                    grunt.log.warn('%s Waiting for DNS to warm up...', chalk.cyan(moment().format()));
                    waitForDNS();
                    return;
                }

                grunt.log.writeln('The instance is accessible through host: %s', chalk.cyan(c.host));

                waitForSSH();
            });
        }

        function waitForSSH () {

            grunt.log.writeln('%s Attempting to connect...', chalk.cyan(moment().format()));

            var connection = ssh([], name, function(){}, false);

            connection.on('error', function () {
                grunt.log.writeln('Connection refused, retrying...');
                waitForSSH();
            });

            connection.on('ready', function () {
                grunt.log.writeln('Success, proceeding.');
                done();
            });
        }

        waitForDNS(); // first attempt
    });
};
