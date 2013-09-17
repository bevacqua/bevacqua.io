'use strict';

var grunt = require('grunt');
var util = require('util');
var spawn = require('child_process').spawn;
var separator = /"[^"]*"|'[^']*'|\S+/g;

module.exports = function(format, values, done, print){
    values.unshift(format);

    var formatted = util.format.apply(util, values);

    grunt.verbose.writeln(formatted);

    var args = formatted.match(separator);
    var cmd = args.shift();
    var stdout = [];

    var stream = spawn(cmd, args, {
        env: conf()
    });

    stream.stdout.on('data', function (data) {
        if (print !== false) {
            grunt.log.write(data);
        }

        stdout.push(data);
    });

    stream.stderr.on('data', function (data) {
        grunt.log.write(chalk.yellow(data));
    });

    stream.on('close', function (code) {
        if (code !== 0) {
            grunt.fatal('Exit code ' + code);
        }

        if (print !== false) {
            done();
        } else {
            done(stdout.join(''));
        }
    });
};
