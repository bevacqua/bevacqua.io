'use strict';

import React from 'react';
import Router from 'react-router';
import Layout from './components/Layout';
import routes from './routes';
import env from './lib/env';

var version = env('BUILD_VERSION');

export default function router (req, res, next) {
  var context = {
    routes: routes, location: req.url
  };
  Router.create(context).run(ran);
  function ran (Handler, state) {
    var doctype = '<!doctype html>';
    var main = React.renderToString(<Handler />);
    var full = React.renderToString(<Layout version={version} main={main} />);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(doctype + full);
    res.end();
  }
};
