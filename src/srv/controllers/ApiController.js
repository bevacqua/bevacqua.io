'use strict';

var util = require('util');
var Controller = require('./Controller.js');

function ApiController(){
    Controller.call(this);
}

util.inherits(ApiController, Controller);

ApiController.prototype.v = '/api/v1';

module.exports = ApiController;
