'use strict';

var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var pty = require('pty.js');
var cwd = process.cwd();

module.exports = function(grunt){

    grunt.registerTask('ec2_create_keypair', function(name){
        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide a key-pair name.',
                'e.g: ' + chalk.yellow('grunt ec2_create_keypair:name')
            ].join('\n'));
        }

        var dir = path.join(cwd, 'deploy/private');
        var file = path.join(dir, name + '.pem');
        var pubKey = path.relative(cwd, file + '.pub');
        var done = this.async();

        mkdirp.sync(dir);

        var cli = pty.spawn('ssh-keygen', [
            '-t', 'rsa',
            '-N', '',
            '-C', name,
            '-f', file
        ], { env: conf() });

        grunt.log.writeln('Generating Key Pair named %s...', chalk.cyan(name));

        cli.on('data', function(data){
            grunt.log.writeln(data);
        });

        cli.on('error', function(err){
            grunt.fatal(err);
        });

        cli.on('end', function(){

            grunt.log.writeln('Uploading Key Pair %s to EC2...', chalk.cyan(pubKey));

            var output = [];

            cli = pty.spawn('aws', [
                'ec2', 'import-key-pair',
                '--public-key-material', 'file://' + pubKey,
                '--key-name', name
            ], { env: conf() });

            cli.on('data', function(data){
                output.push(data);
            });

            cli.on('error', function(err){
                grunt.fatal(err);
            });

            cli.on('end', function(){

                var json;
                try {
                    json = JSON.parse(output.join());
                } catch (e) {
                    grunt.fatal(output);
                }

                grunt.log.writeln(JSON.stringify(json, null, 3));

                console.log('Key Pair imported into EC2 successfully.');
                done();
            });
        });
    });
};
