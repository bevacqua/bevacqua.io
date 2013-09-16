'use strict';

var fs = require('fs-extra');
var path = require('path');
var chalk = require('chalk');
var exec = require('./lib/exec.js');
var cwd = process.cwd();

module.exports = function(grunt){

    grunt.registerTask('ec2_delete_keypair', function(name){
        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide a key-pair name.',
                'e.g: ' + chalk.yellow('grunt ec2_delete_keypair:name')
            ].join('\n'));
        }

        grunt.log.writeln('Deleting EC2 Key Pair named %s...', chalk.red(name));

        var done = this.async();

        exec('aws ec2 delete-key-pair --key-name %s', [name], removeFromDisk);

        function removeFromDisk () {
            var dir = path.join(cwd, 'deploy/private');
            var file = path.join(dir, name + '.pem');

            removeFile(file, function(){
                removeFile(file + '.pub', done);
            });

        }

        function removeFile (file, next) {
            fs.remove(file, function(err){
                if (err) { grunt.warn(err); }

                var relative = path.relative(cwd, file);

                grunt.log.writeln('Deleted ' + chalk.red(relative));
                next();
            });
        }
    });
};
