'use strict';

var _ = require('lodash');
var grunt = require('grunt');
var ultramarked = require('ultramarked');
var links = require('../../dat/buildfirst/links.json');
var jadeContextService = require('./service/jadeContextService.js');

jadeContextService.registerProvider(function(){
    return {
        buildfirst: {
            links: _.map(links, function(link){
                link.description = ultramarked(link.description);
                return link;
            })
        }
    };
});

module.exports = {
    package: {
        pkg: grunt.file.readJSON('package.json')
    },
    dev: require('./task/development.js'),
    env: require('./task/environment.js'),
    build: require('./task/build.js'),
    release: require('./task/release.js'),
    deploy: require('./task/deploy.js')
};
