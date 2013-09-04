'use strict';

module.exports = {
    dev: require('./task/development.js'),
    env: require('./task/environment.js'),
    build: require('./task/build.js')
};