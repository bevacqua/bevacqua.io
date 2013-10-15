'use strict';

var _ = require('lodash');
var ultramarked = require('ultramarked');
var stylesheets = require('../stylesheets.js');
var javascripts = require('../javascripts.js');
var jadeContextService = require('../../service/jadeContextService.js');
var links = require_cwd('dat/buildfirst/links.json');

jadeContextService.registerProvider(function(){
    return { stylesheets: stylesheets.files() };
});

jadeContextService.registerProvider(function(){
    return { javascripts: javascripts.files() };
});

jadeContextService.registerProvider(function(){
    return { pkg: require_cwd('package.json') };
});

jadeContextService.registerProvider(function(){
    return {
        buildfirst: {
            links: _.map(links, function(link, key){
                link.key = key;
                link.description = ultramarked(link.description || '');
                return link;
            })
        }
    };
});
