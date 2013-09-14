'use strict';

var util = require('util');

module.exports = function(grunt){

    grunt.registerTask('ec2_launch', function(name){
        var tasks = util.format('ec2_create_keypair:%s ec2_run:%s', name, name);
        grunt.task.run(tasks);
    });
};
