'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var ssh = require('./lib/ssh.js');

module.exports = function(grunt){

    grunt.registerTask('ssh_setup', function(name){

        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide an instance name.',
                'e.g: ' + chalk.yellow('grunt ssh_deploy:name')
            ].join('\n'));
        }
        // TODO nginx, users

        var done = this.async();
        var tasks = [[
            // setup directory structure
            'sudo mkdir -p /srv/apps/io/rsync'
        ], [
            // install Node.js
            'sudo apt-get install python-software-properties',
            'sudo add-apt-repository ppa:chris-lea/node.js -y',
            'sudo apt-get update',
            'sudo apt-get install nodejs -y'
        ]];

        var commands = _.flatten(tasks);
        ssh(commands, name, done);
    });
};
