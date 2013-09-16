'use strict';

var path = require('path');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var exec = require('./lib/exec.js');
var cwd = process.cwd();

module.exports = function(grunt){

    grunt.registerTask('ec2_create_keypair', function(name){

        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide a key pair name.',
                'e.g: ' + chalk.yellow('grunt ec2_create_keypair:name')
            ].join('\n'));
        }

        var done = this.async();
        var dir = path.join(cwd, 'deploy/private');
        var file = path.join(dir, name + '.pem');
        var pubKey = path.relative(cwd, file + '.pub');

        mkdirp.sync(dir);

        grunt.log.writeln('Generating key pair named %s...', chalk.cyan(name));

        exec('ssh-keygen -t rsa -N "" -C %s -f %s', [name, file], upload);

        function upload () {

            grunt.log.writeln('Uploading public key %s to EC2...', chalk.cyan(pubKey));

            exec('aws ec2 import-key-pair --public-key-material %s --key-name %s', [
                'file://' + pubKey, name
            ], done);

        }
    });
};
