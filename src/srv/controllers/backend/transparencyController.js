'use strict';

var controller = module.exports = new (require('../Controller.js'))();

controller.registerRoutes = function(app){
    app.get('/blog', controller.redirect('http://blog.ponyfoo.com'));
    app.get('/career', controller.redirect('http://careers.stackoverflow.com/bevacqua'));
    app.get('/code', controller.redirect('https://github.com/bevacqua'));
    app.get('/source', controller.redirect('https://github.com/bevacqua/io'));
    app.get('/stackoverflow', controller.redirect('http://stackoverflow.com/users/389745/nico'));
    app.get('/twitter', controller.redirect('https://twitter.com/nzgb'));
};
