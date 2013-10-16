'use strict';

var path = require('path');
var util = require('util');
var viewBase = 'bin/views';
var Controller = require('./Controller.js');

function ViewController(name){
    Controller.call(this);

    this.name = name;
}

util.inherits(ViewController, Controller);

ViewController.prototype.renderView = function(res, view){
    var file = path.join(viewBase, this.name, view);

    res.sendfile(file);
};

ViewController.prototype.getView = function(view){
    var controller = this;

    return function (req, res) {
        controller.renderView(res, view + '.html');
    };
};

module.exports = ViewController;
