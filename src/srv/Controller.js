'use strict';

var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var viewBase = 'bin/views';

function Controller(name){
    this.name = name;
}

Controller.prototype.renderView = function(res, view){
    var file = path.join(viewBase, this.name, view);

    fs.readFile(file, function(err, data){
        res.set('Content-Type', 'text/html');
        res.end(data);
    });
};

Controller.prototype.getView = function(view){
    var controller = this;

    return function (req, res) {
        controller.renderView(res, view + '.html');
    };
};

module.exports = function(){
    var args = _.toArray(arguments);
    return new (Function.prototype.bind.apply(Controller, [null].concat(args)))();
};