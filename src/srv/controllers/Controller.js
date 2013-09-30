'use strict';

function Controller(){
}

Controller.prototype.redirect = function (to, code) {
    code = code || 302;

    return function (req, res) {
        res.redirect(to, code);
    };
};

module.exports = Controller;
