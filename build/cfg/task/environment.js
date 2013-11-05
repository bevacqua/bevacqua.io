'use strict';

var path = require('path');
var util = require('util');
var settings = {
    pem_gen: {},
    pem_encrypt: {},
    pem_decrypt: {}
};

function addGenerator (task, pem) {
    settings.pem_gen[task] = { pem: pem };
}

function addPemcrypt (task, pem, store, storeName, raw, secure) {
    settings.pem_encrypt[task] = settings.pem_decrypt[task] = {
        pem: pem,
        pemstore: store + '/secure/' + storeName,
        rawstore: store + '/private/' + storeName,
        raw: raw,
        secure: secure
    };
}

function addConfig (keyName) {
    var taskName = keyName + '_config';
    var keyFile = util.format('env/private/%s.pemkey', keyName);
    var pem = path.join(conf.cwd, keyFile);

    addGenerator(taskName, pem);
    addPemcrypt(taskName, pem, 'env', keyName);
}

function addDeploy (keyName) {
    var taskName = keyName + '_deploy';
    var keyFile = util.format('deploy/private/%s.pemkey', keyName);
    var pem = path.join(conf.cwd, keyFile);

    addGenerator(taskName, pem);
    addPemcrypt(taskName, pem, 'deploy', keyName, '.pem', '.pemsecure');
    addPemcrypt(taskName + '_pub', pem, 'deploy', keyName, '.pem.pub', '.pubsecure');
}

addConfig('grunt');
addConfig('development');
addConfig('edge');
addConfig('production');

addDeploy('edge');
addDeploy('production');

module.exports = settings;
