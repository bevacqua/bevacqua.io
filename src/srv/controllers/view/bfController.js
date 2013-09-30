'use strict';

var controller = module.exports = require('../ViewController.js')('bf');
var links = require_cwd('dat/buildfirst/links.json');

controller.registerRoutes = function(app){
    app.get('/bf', controller.redirect('/buildfirst', 301));
    app.get('/bf/:key', controller.expandShortLink);
};

controller.expandShortLink = function(req, res, next){
    var key = req.params.key;
    var link = links[key];

    if (!link){
        return next();
    }

    // 301 wouldn't allow for fixes if the link is broken
    res.redirect(link.url);
};
