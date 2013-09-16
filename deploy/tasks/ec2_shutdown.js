'use strict';

var _ = require('lodash');
var chalk = require('chalk');
var exec = require('./lib/exec.js');
var lookup = require('./lib/lookupEC2.js');

module.exports = function(grunt){

    grunt.registerTask('ec2_shutdown', function(name){

        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide an instance name.',
                'e.g: ' + chalk.yellow('grunt ec2_shutdown:name')
            ].join('\n'));
        }

        var done = this.async();

        lookup(name, function (instance) {
            var id = instance.InstanceId;

            grunt.log.writeln('Queuing termination task for instance %s...', chalk.red(id));
            grunt.tasks.run([
                'ec2_terminate_instance:' + id,
                'ec2_delete_keypair:' + name
            ]);

            done();
        });

    });
};
