'use strict';

var path = require('path');
var cwd = process.cwd();
var devkey = path.join(cwd, 'env/private/dev.pem');
var awskey = path.join(cwd, 'env/private/aws.pem');

module.exports = {
    pem_gen: {
        dev: { pem: devkey },
        aws: { pem: awskey }
    },
    pem_encrypt: {
        dev: { pem: devkey, pemstore: 'env/secure/dev', rawstore: 'env/private/dev' },
        aws: { pem: awskey, pemstore: 'env/secure/aws', rawstore: 'env/private/aws' }
    },
    pem_decrypt: {
        dev: { pem: devkey, pemstore: 'env/secure/dev', rawstore: 'env/private/dev' },
        aws: { pem: awskey, pemstore: 'env/secure/aws', rawstore: 'env/private/aws' }
    }
};
