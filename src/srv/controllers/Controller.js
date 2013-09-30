'use strict';

var _ = require('lodash');

function Controller(){
}

Controller.prototype.redirect = function (to, code) {
    code = code || 302;

    return function (req, res) {
        res.redirect(to, code);
    };
};

module.exports = function(){
    var args = _.toArray(arguments);
    return new (Function.prototype.bind.apply(Controller, [null].concat(args)))();
};
