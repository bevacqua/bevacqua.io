'use strict';

var _ = require('lodash');
var logger = require('winston');
var cluster = require('cluster');

var api = module.exports = {
    stream: function(level){
        return {
            write: function(data){
                var message = data.replace(/\n+$/, ''); // remove trailing breaks
                logger[level](message);
            }
        };
    }
};

var levels = ['debug', 'info', 'warn', 'error'];
var me;

if (cluster.isWorker) {
    me = 'wkr-' + cluster.worker.id;
} else {
    me = 'master';
}

_.each(levels, function(level){
    api[level] = logger[level].bind(logger, me);
});

require('./transports.js');
