!function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-35043128-4","bevacqua.io"),ga("send","pageview"),function(a,b){if(!b.__SV){var c,d;window.mixpanel=b,c=a.createElement("script"),c.async=!0,c.type="text/javascript",c.src="https://cdn.mxpnl.com/libs/mixpanel-2.2.min.js",d=a.getElementsByTagName("script")[0],d.parentNode.insertBefore(c,d),b._i=[],b.init=function(a,c,d){function e(a,b){var c=b.split(".");2===c.length&&(b=c[1],a=a[c[0]]),a[b]=function(){a.push([b].concat(Array.prototype.slice.call(arguments,0)))}}var f,g=b,h="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");for(void 0===d?d="mixpanel":g=b[d]=[],g.people=g.people||[],g.toString=function(a){var b="mixpanel";return"mixpanel"!==d&&(b+="."+d),a||(b+=" (stub)"),b},g.people.toString=function(){return g.toString(1)+".people (stub)"},f=0;f<h.length;f++)e(g,h[f]);b._i.push([a,c,d])},b.__SV=1.2}b.init("cba6fbc4672c2d977844d44ef7d429e1")}(document,window.mixpanel||[]),function(a,b){"use strict";function c(b,c,d){var e=document.querySelector(b);e&&a.track_links(b,c,d)}var d=b.pathname+b.search+b.hash;c(".js-meap-header","Click MEAP link in header",{referrer:document.referrer,url:d}),c(".js-manning-cover","Click book cover",{referrer:document.referrer,url:d}),c(".js-manning-sample","Click sample chapter link",{referrer:document.referrer,url:d}),c(".js-manning-late","Purchase link",{referrer:document.referrer,url:d})}(mixpanel,location);