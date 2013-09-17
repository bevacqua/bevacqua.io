'use strict';

var chalk = require('chalk');
var sshCredentials = require('./lib/sshCredentials.js');

module.exports = function(grunt){

    grunt.registerTask('ssh_wait', function(name){

        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide an instance name.',
                'e.g: ' + chalk.yellow('grunt ssh_wait:name')
            ].join('\n'));
        }

        var done = this.async();

        sshCredentials(name, function (c) {
            if (!c) {
                grunt.log.warn('This instance is refusing SSH connections for now...');
                grunt.task.run('ssh_wait:' + name);
            }

            grunt.log.writeln('The instance is accessible through host: %s', chalk.cyan(c.host));

            done();
        });
    });
};
