'use strict';

var env = require('../lib/env');
var GoogleAnalytics = require('ga');
var gac = env('GA');
var ga = new GoogleAnalytics(gac.PROPERTY, gac.HOST);

function trackPage (url) {
  ga.trackPage(url);
}

module.exports = {
  trackPage: trackPage
};
