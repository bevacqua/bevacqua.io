'use strict';

var fs = require('fs');
var path = require('path');
var lookup = require('./lookupEC2.js');

module.exports = function (name, done) {

    lookup(name, function (instance) {
        var keyFile = path.join('deploy/private', name + '.pem');
        var keyFileLong = path.join(process.cwd(), keyFile);

        done({
            id: instance.InstanceId,
            host: instance.PublicDnsName,
            port: 22,
            username: conf('AWS_SSH_USER'),
            privateKeyFile: keyFile,
            privateKey: fs.readFileSync(keyFileLong)
        });

    });
};
