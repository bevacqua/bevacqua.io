'use strict';

var pty = require('pty.js');

module.exports = function(grunt){

    grunt.registerTask('ec2_list', function(){
        var done = this.async();
        var cli = pty.spawn('aws', ['ec2', 'describe-instances'], { env: conf() });

        grunt.log.writeln('Getting EC2 instance list...');

        cli.on('data', function(data){
            grunt.log.writeln(data);
        });

        cli.on('error', function(err){
            grunt.fatal(err);
        });

        cli.on('end', done);
    });
};
