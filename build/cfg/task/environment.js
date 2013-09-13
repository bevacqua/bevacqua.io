'use strict';

var path = require('path');
var cwd = process.cwd();
var devkey = path.join(cwd, 'env/private/dev.pem');
var devkey = path.join(cwd, 'env/private/dpy.pem');

module.exports = {
    pem_gen: {
        dev: { pem: devkey },
        dpy: { pem: dpykey }
    },
    pem_encrypt: {
        dev: { pem: devkey, pemstore: 'env/secure/dev', rawstore: 'env/private/dev' },
        dpy: { pem: dpykey, pemstore: 'env/secure/dpy', rawstore: 'env/private/dpy' }
    },
    pem_decrypt: {
        dev: { pem: devkey, pemstore: 'env/secure/dev', rawstore: 'env/private/dev' },
        dpy: { pem: dpykey, pemstore: 'env/secure/dpy', rawstore: 'env/private/dpy' }
    }
};
