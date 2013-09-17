'use strict';

var Connection = require('ssh2');
var grunt = require('grunt');
var chalk = require('chalk');
var sshCredentials = require('./sshCredentials.js');

module.exports = function(commands, name, done){
    var c = new Connection();

    c.on('ready', next);
    c.on('error', grunt.fatal);
    c.on('close', done);

    sshCredentials(name, function(credentials) {

        if (!credentials) {
            grunt.fatal('The %s instance is refusing SSH connections for now', chalk.yellow(name));
        }

        c.connect(credentials);
    });

    function next () {

        if (commands.length === 0) {
            c.end();
        } else {
            var command = commands.shift();

            grunt.verbose.writeln(command);

            c.exec(command, function (err, stream) {
                if (err) { grunt.fatal(err); }

                stream.on('data', function (data, extended) {
                    var out = String(data);

                    if (extended === 'stderr') {
                        grunt.fatal(out);
                    } else {
                        grunt.log.writeln(out);
                    }
                });

                stream.on('exit', function (code) {

                    if (code !== 0) {
                        grunt.fatal(command, chalk.red('exit code ' + code));
                    } else {
                        next();
                    }

                });
            });
        }
    }
};
