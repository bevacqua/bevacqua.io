'use strict';

var url = location.pathname + location.search + location.hash;

click('.js-meap-header', 'Click MEAP link in header', { referrer: document.referrer, url: url });
click('.js-manning-cover', 'Click book cover', { referrer: document.referrer, url: url });
click('.js-manning-sample', 'Click sample chapter link', { referrer: document.referrer, url: url });
click('.js-manning-late', 'Purchase link', { referrer: document.referrer, url: url });

function click (selector, description, properties) {
  var element = document.querySelector(selector);
  if (element) {
    mixpanel.track_links(selector, description, properties);
  }
}
