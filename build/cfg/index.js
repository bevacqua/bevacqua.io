'use strict';

var jadeContextService = require('./service/jadeContextService.js');

jadeContextService.registerProvider(function(){
    return {
        buildfirst: {
            links: require('../../dat/buildfirst/links.json')
        }
    };
});

module.exports = {
    dev: require('./task/development.js'),
    env: require('./task/environment.js'),
    build: require('./task/build.js')
};