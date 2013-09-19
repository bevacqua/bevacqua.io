'use strict';

var grunt = require('grunt');

module.exports = {
    shell: {
        deploy_setup: {
            command: 'pip install awscli --upgrade',
            options: {
                stdout: true,
                stderr: true,
                failOnError: true
            }
        }
    },
    ec2: grunt.file.readJSON('env/private/aws.json')
};
