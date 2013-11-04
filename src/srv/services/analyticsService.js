'use strict';

var GoogleAnalytics = require('ga');
var gac = conf('GA');
var ga = new GoogleAnalytics(gac.PROPERTY, gac.HOST);

module.exports = {
    trackPage: function (url) {
        ga.trackPage(url);
    }
};
