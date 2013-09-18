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

        // TODO nginx server, rsync user, node user, [nginx user?]
        var done = this.async();
        var tasks = [[ // rsync
            'sudo mkdir -p /srv/rsync/io/latest',
            'sudo mkdir -p /srv/apps/io/v',
            'sudo chown ubuntu /srv/rsync/io/latest'
        ], [ // node.js
            'sudo apt-get install python-software-properties',
            'sudo add-apt-repository ppa:chris-lea/node.js -y',
            'sudo apt-get update',
            'sudo apt-get install nodejs -y'
        ], [ // pm2
            'sudo apt-get install make g++ -y',
            'sudo npm install -g pm2',
            'sudo pm2 startup'
        ]];

        var commands = _.flatten(tasks);
        ssh(commands, name, done);
    });
};
