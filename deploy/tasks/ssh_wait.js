'use strict';

var chalk = require('chalk');
var moment = require('moment');
var sshCredentials = require('./lib/sshCredentials.js');
var ssh = require('./lib/ssh.js');

function now () {
    return chalk.cyan(moment().format());
}

function w3 (fn) {
    setTimeout(fn, 3000);
}

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
                    grunt.log.warn('%s Waiting for DNS to warm up, retrying in 3s...', now());
                    w3(waitForDNS);
                    return;
                }

                grunt.log.writeln('%s The instance is accessible through host: %s', now(), chalk.cyan(c.host));

                waitForSSH();
            });
        }

        function waitForSSH () {

            grunt.log.writeln('%s Attempting to connect...', now());

            var connection = ssh([], name, function(){}, false);

            connection.on('error', function () {
                grunt.log.writeln('%s Connection refused, retrying in 3s...', now());
                w3(waitForSSH);
            });

            connection.on('ready', function () {
                grunt.log.writeln('%s Success, proceeding.', now());
                done();
            });
        }

        waitForDNS(); // first attempt
    });
};
