'use strict';

var grunt = require('grunt');
var util = require('util');
var exec = require('child_process').exec;

module.exports = function(command, args, done, print){
    args.unshift(command);

    var cmd = util.format.apply(util, args);

    grunt.verbose.writeln(cmd);

    exec(cmd, { env: conf() }, callback);

    function callback (err, stdout, stderr) {
        if (err) { grunt.fatal(err); }
        if (stderr) { grunt.fatal(stderr); }

        if (print !== false) {
            grunt.log.writeln(stdout);
            done();
        } else {
            done(stdout);
        }
    }
};
