'use strict';

var chalk = require('chalk');
var pty = require('pty.js');

module.exports = function(grunt){

    grunt.registerTask('ec2_create_tag', function(id, name){
        if (arguments.length < 2) {
            grunt.fatal([
                'You should provide an id, and the name you want to give to the instance.',
                'e.g: ' + chalk.yellow('grunt ec2_create_tag:id:name')
            ].join('\n'));
        }

        var done = this.async();
        var cli = pty.spawn('aws', [
            'ec2', 'create-tags',
            '--resources', id,
            '--tags', 'Key=Name,Value=' + name
        ], { env: conf() });

        grunt.log.writeln('Naming EC2 instance %s as %s', chalk.cyan(id), chalk.cyan(name));

        cli.on('data', function(data){
            grunt.log.writeln(data);
        });

        cli.on('error', function(err){
            grunt.fatal(err);
        });

        cli.on('end', done);
    });
};
