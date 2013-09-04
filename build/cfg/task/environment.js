'use strict';

var path = require('path');
var cwd = process.cwd();
var pemkey = path.join(cwd, 'env/.private.pem');

module.exports = {
    pem_gen: {
        key: { pem: pemkey }
    },
    pem_encrypt: {
        dev: { pem: pemkey, store: 'env/dev_sensitive' }
    },
    pem_decrypt: {
        dev: { pem: pemkey, store: 'env/dev_sensitive' }
    }
};