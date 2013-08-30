'use strict';

var fs = require('fs');
var path = require('path');
var viewBase = 'bin/views';

function Controller(name){
    this.name = name;
}

Controller.prototype.renderView = function(res, view){
    var file = path.join(viewBase, this.name, view);

    fs.readFile(file, function(err, data){
        res.end(data);
    });
};

module.exports = function(name){
    return new (Function.prototype.bind.apply(Controller, name));
};