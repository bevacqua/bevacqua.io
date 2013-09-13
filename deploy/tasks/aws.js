'use strict';

module.exports = function(grunt){
    var pty = require('pty.js');

    grunt.registerTask('ec2_run', function(){

    });

    grunt.registerTask('ec2_kill', function(){

    });

    grunt.registerTask('ec2_list', function(){
        var done = this.async();
        var cli = pty.spawn('aws', ['ec2', 'describe-instances'], {
            env: conf()
        });

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
