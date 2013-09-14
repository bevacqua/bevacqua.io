'use strict';

var fs = require('fs-extra');
var path = require('path');
var mkdirp = require('mkdirp');
var chalk = require('chalk');
var pty = require('pty.js');
var cwd = process.cwd();

module.exports = function(grunt){

    grunt.registerTask('ec2_delete_keypair', function(name){
        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide a key-pair name.',
                'e.g: ' + chalk.yellow('grunt ec2_delete_keypair:name')
            ].join('\n'));
        }

        var output = '';
        var done = this.async();
        var cli = pty.spawn('aws', [
            'ec2', 'delete-key-pair', '--key-name', name
        ], { env: conf() });

        grunt.log.writeln('Deleting EC2 Key Pair named %s...', chalk.red(name));

        cli.on('data', function(data){
            output += data;
        });

        cli.on('error', function(err){
            grunt.fatal(err);
        });

        cli.on('end', function(){
            var dir = path.join(cwd, 'deploy/private');
            var file = path.join(dir, name + '.pem');

            fs.remove(file, function(err){
                if (err) { grunt.fatal(err); }

                var relative = path.relative(cwd, file);

                grunt.log.writeln('Private .pem file deleted from ' + chalk.red(relative));
                done();
            });
        });
    });
};
