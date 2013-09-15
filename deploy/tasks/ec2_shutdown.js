'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var pty = require('pty.js');

module.exports = function(grunt){

    grunt.registerTask('ec2_shutdown', function(name){
        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide a name.',
                'e.g: ' + chalk.yellow('grunt ec2_shutdown:name')
            ].join('\n'));
        }

        var done = this.async();
        var output = [];
        var cli = pty.spawn('aws', [
            'ec2', 'describe-instances',
            '--filters', 'Name=tag:Name,Values=' + name
        ], { env: conf() });

        grunt.log.writeln('Looking up EC2 instances named %s...', chalk.red(name));

        cli.on('data', function(data){
            output.push(data);
        });

        cli.on('error', function(err){
            grunt.fatal(err);
        });

        cli.on('end', function(){
            var tasks = [];
            var json;
            try {
                json = JSON.parse(output.join(''));
            } catch (e) {
                grunt.fatal(output);
            }

            var instances = _.pluck(json.Reservations, 'Instances');
            var flat = _.flatten(instances);

            _.each(flat, function(instance){
                var id = instance.InstanceId;
                grunt.log.writeln('Queuing termination task for instance %s...', chalk.red(id));
                tasks.push('ec2_terminate_instance:' + id);
            });

            tasks.push('ec2_delete_keypair:' + name);

            grunt.task.run(tasks);
            done();
        });

    });
};
