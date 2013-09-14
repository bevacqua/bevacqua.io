'use strict';

module.exports = function(grunt){
    var chalk = require('chalk');
    var pty = require('pty.js');

    grunt.registerTask('ec2_run', function(){
        var done = this.async();
        var cli = pty.spawn('aws', [
            'ec2', 'run-instances',
            '--image-id', conf('AWS_IMAGE_ID'),
            '--instance-type', conf('AWS_INSTANCE_TYPE'),
            '--dry-run'
        ], { env: conf() });

        // --key-name MyKeyPair --security-groups MySecurityGroup

        grunt.log.writeln('Launching %s instance', chalk.cyan(conf('AWS_INSTANCE_TYPE')));

        cli.on('data', function(data){
            grunt.log.writeln(data);
        });

        cli.on('error', function(err){
            grunt.log.error(err);
        });

        cli.on('end', done);
    });

    grunt.registerTask('ec2_kill', function(){

    });

    grunt.registerTask('ec2_list', function(){
        var done = this.async();
        var cli = pty.spawn('aws', ['ec2', 'describe-instances'], { env: conf() });

        grunt.log.writeln('Querying AWS...');

        cli.on('data', function(data){
            grunt.log.writeln(data);
        });

        cli.on('error', function(err){
            grunt.log.error(err);
        });

        cli.on('end', done);
    });
};
