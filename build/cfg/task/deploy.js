'use strict';

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
    ec2: {
        RSYNC_IGNORE: '.rsyncignore'
    }
};
