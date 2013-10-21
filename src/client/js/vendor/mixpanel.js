(function (document, mp) {
    if (!mp.__SV) {
        var elem, first;
        window.mixpanel = mp;
        elem = document.createElement('script');
        elem.async = true;
        elem.type = 'text/javascript';
        elem.src = 'https://cdn.mxpnl.com/libs/mixpanel-2.2.min.js';
        first = document.getElementsByTagName('script')[0];
        first.parentNode.insertBefore(elem, first);
        mp._i = [];
        mp.init = function (token, config, name) {
            function register(target, method) {
                var method_tree = method.split('.');
                if (method_tree.length === 2) {
                    method = method_tree[1];
                    target = target[method_tree[0]];
                }
                target[method] = function () {
                    target.push([method].concat(Array.prototype.slice.call(arguments, 0)));
                };
            }
            var current = mp, methods = 'disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user'.split(' '), i;

            if (name === void 0) {
                name = 'mixpanel';
            } else {
                current = mp[name] = [];
            }

            current.people = current.people || [];
            current.toString = function (b) {
                var result = 'mixpanel';
                if (name !== 'mixpanel') {
                    result += '.' + name;
                }
                if (!b) {
                    result += ' (stub)';
                }
                return result;
            };
            current.people.toString = function () {
                return current.toString(1) + '.people (stub)';
            };

            for (i = 0; i < methods.length; i++) {
                register(current, methods[i]);
            }
            mp._i.push([token, config, name]);
        };
        mp.__SV = 1.2
    }
})(document, window.mixpanel || []);

mixpanel.init('cba6fbc4672c2d977844d44ef7d429e1');
