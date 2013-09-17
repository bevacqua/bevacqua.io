'use strict';

var Connection = require('ssh2');
var util = require('util');
var grunt = require('grunt');
var chalk = require('chalk');
var sshCredentials = require('./sshCredentials.js');

module.exports = function(commands, name, done, fatal){
    var c = new Connection();

    c.on('ready', next);
    c.on('close', done);

    if (fatal !== false) {
        c.on('error', grunt.fatal);
    }

    sshCredentials(name, function(credentials) {

        if (!credentials) {
            grunt.fatal('This instance is refusing SSH connections for now');
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

    return c;
};
