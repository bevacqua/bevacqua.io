'use strict';

module.exports = function(grunt){

    grunt.registerTask('ec2_launch', function(name){

        grunt.task.run([
            'ec2_create_keypair:' + name,
            'ec2_run_instance:' + name
        ]);
    });
};
