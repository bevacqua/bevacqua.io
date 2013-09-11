# CSS Stylus Sources

During builds, `vendor.styl` will be merged with `all.styl` and the CSS generated in the `sprite` task, into a single CSS file. This separation allows us to lint the `all.styl` generated CSS individually, by using [csslint](https://github.com/stubbornella/csslint "stubbornella/csslint").

By convention, CSS is written using a mobile first approach, and classes are broken down by components, then prefixed with a two-letter identifier for those components. For example, the page header is given the `hd` prefix, and then all classes related to that component use that prefix: `.hd-item, .hd-wrapper`, and so on, avoiding clashes, and giving us semantic namespaces.