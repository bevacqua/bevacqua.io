(function (mixpanel, location) {
    'use strict';

    var url = location.pathname + location.search + location.hash;

    function click (selector, description, properties) {
        var element = document.querySelector(selector); // one is enough
        if (element) {
            mixpanel(selector, description, properties);
        }
    }

    click('.js-manning-cover', 'Click book cover', { referrer: document.referrer, url: url });
    click('.js-manning-sample', 'Click sample chapter link', { referrer: document.referrer, url: url });
})(mixpanel, location);

