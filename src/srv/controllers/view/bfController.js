'use strict';

var controller = module.exports = new (require('../ViewController.js'))('bf');
var links = require_cwd('dat/buildfirst/links.json');
var analytics = require('../../services/analyticsService.js');

controller.registerRoutes = function(app){
    app.get('/bf', controller.redirect('/buildfirst', 301));
    app.get('/bf/resources', controller.redirect('/buildfirst/resources', 301));
    app.get('/bf/:key', controller.expandShortLink);
};

controller.expandShortLink = function(req, res, next){
    var key = req.params.key;
    var link = links[key];

    if (!link){
        return next();
    }

    analytics.trackPage(req.url);

    // 301 wouldn't allow for fixes if the link is broken
    res.redirect(link.url);
};
