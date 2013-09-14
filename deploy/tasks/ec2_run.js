'use strict';

var chalk = require('chalk');
var pty = require('pty.js');

module.exports = function(grunt){

    grunt.registerTask('ec2_run', function(name){
        if (arguments.length === 0) {
            grunt.fatal([
                'You should provide a name for the instance.',
                'e.g: ' + chalk.yellow('grunt ec2_launch:name')
            ].join('\n'));
        }

        var output = [];
        var done = this.async();
        var cli = pty.spawn('aws', [
            'ec2', 'run-instances',
            '--image-id', conf('AWS_IMAGE_ID'),
            '--instance-type', conf('AWS_INSTANCE_TYPE'),
            '--count', '1',
            '--key-name', name,
            '--security-groups', conf('AWS_SECURITY_GROUP_NAME')
        ], { env: conf() });

        grunt.log.writeln('Launching EC2 %s instance', chalk.cyan(conf('AWS_INSTANCE_TYPE')));

        cli.on('data', function(data){
            output.push(data);
        });

        cli.on('error', function(err){
            grunt.fatal(err);
        });

        cli.on('end', function(){
            var json;
            try {
                json = JSON.parse(output);
            } catch (e) {
                grunt.fatal(output);
            }

            var id = json.Instances[0].InstanceId;
            var tag = util.format('ec2_create_tag:%s:%s', id, name);

            grunt.task.run(tag);
            done();
        });
    });
};
