'use strict';

var chalk = require('chalk');
var pty = require('pty.js');

module.exports = function(grunt){

    grunt.registerTask('ec2_terminate_instance', function(id){
        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide an instance id.',
                'e.g: ' + chalk.yellow('grunt ec2_terminate_instance:id')
            ].join('\n'));
        }

        var done = this.async();
        var cli = pty.spawn('aws', [
            'ec2', 'terminate-instances',
            '--instance-ids', id
        ], { env: conf() });

        grunt.log.writeln('Shutting down EC2 instance %s...', chalk.red(id));

        cli.on('data', function(data){
            grunt.log.writeln(data);
        });

        cli.on('error', function(err){
            grunt.fatal(err);
        });

        cli.on('end', done);
    });
};
