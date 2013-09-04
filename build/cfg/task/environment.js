'use strict';

var path = require('path');
var cwd = process.cwd();
var pemkey = path.join(cwd, 'env/.private.pem');

module.exports = {
    pemcrypt_gen: {
        key: { pem: pemkey }
    },
    pemcrypt_encrypt: {
        dev: { pem: pemkey, store: 'env/dev_sensitive' }
    },
    pemcrypt_decrypt: {
        dev: { pem: pemkey, store: 'env/dev_sensitive' }
    }
};