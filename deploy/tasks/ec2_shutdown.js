'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var exec = require('./lib/exec.js');

module.exports = function(grunt){

    grunt.registerTask('ec2_shutdown', function(name){
        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide a name.',
                'e.g: ' + chalk.yellow('grunt ec2_shutdown:name')
            ].join('\n'));
        }

        grunt.log.writeln('Looking up EC2 instances named %s...', chalk.red(name));

        var done = this.async();

        exec('aws ec2 describe-instances --filters Name=tag:Name,Values=%s', [name], terminate, false);

        function terminate(stdout){
            var tasks = [];
            var result = JSON.parse(stdout);
            var instances = _.pluck(result.Reservations, 'Instances');
            var flat = _.flatten(instances);

            _.each(flat, function(instance){
                var id = instance.InstanceId;
                grunt.log.writeln('Queuing termination task for instance %s...', chalk.red(id));
                tasks.push('ec2_terminate_instance:' + id);
            });

            tasks.push('ec2_delete_keypair:' + name);

            grunt.task.run(tasks);
            done();
        }

    });
};
