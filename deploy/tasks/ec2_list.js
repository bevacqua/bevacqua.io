'use strict';

var chalk = require('chalk');
var exec = require('./lib/exec.js');

module.exports = function(grunt){

    grunt.registerTask('ec2_list', function(state){
        var defaultState = 'running';
        var selectedState = state || defaultState;
        var done = this.async();

        grunt.log.writeln('Getting EC2 instances filtered by %s state...', chalk.cyan(selectedState));

        exec('aws ec2 describe-instances --filters Name=instance-state-name,Values=%s', [selectedState], done);
    });
};
