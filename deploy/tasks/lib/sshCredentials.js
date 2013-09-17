'use strict';

var fs = require('fs');
var path = require('path');
var lookup = require('./lookupEC2.js');
var cache = {};

module.exports = function (name, done) {

    if (name in cache) { // prevent redundant lookups.
        return process.nextTick(function(){
            done(cache[name]);
        });
    }

    lookup(name, function (instance) {
        var keyFile = path.join('deploy/private', name + '.pem');
        var keyFileLong = path.join(process.cwd(), keyFile);

        var result = cache[name] = {
            id: instance.InstanceId,
            host: instance.PublicDnsName,
            port: 22,
            username: conf('AWS_SSH_USER'),
            privateKeyFile: keyFile,
            privateKey: fs.readFileSync(keyFileLong)
        };

        if (!result.host) {
            delete cache[name];
        }

        done(cache[name]);
    });
};
