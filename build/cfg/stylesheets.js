'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function(){
    var folder = 'bin/public/css';
    
    return fs.readdirSync(folder).map(function(file){
        return path.join(folder, file);
    });
};