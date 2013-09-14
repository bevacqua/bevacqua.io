'use strict';

var fs = require('fs');
var path = require('path');
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

        var output = '';
        var done = this.async();
        var cli = pty.spawn('aws', [
            'ec2', 'create-key-pair', '--key-name', name
        ], { env: conf() });

        grunt.log.writeln('Creating EC2 Key Pair named %s...', chalk.cyan(name));

        cli.on('data', function(data){
            output += data;
        });

        cli.on('error', function(err){
            grunt.fatal(err);
        });

        cli.on('end', function(){
            var json;
            try {
                json = JSON.parse(output);
            } catch (e) {
                grunt.log.warn(output);
            }

            var name = json.KeyName;
            var privateKey = json.KeyPair.KeyMaterial;
            var file = path.join(cwd, 'deploy/private', name + '.pem');

            fs.writeFile(file, privateKey, 'ascii', function(err){
                if (err) { grunt.fatal(err); }

                grunt.log.writeln('EC2 Key Pair dumped to disk, at' + chalk.cyan('./deploy/private'));
                done();
            });
        });
    });
};
