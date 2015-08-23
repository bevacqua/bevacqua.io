'use strict';

import React from 'react';
import Router from 'react-router';
import Layout from './components/Layout';
import routes from './routes';

export default function router (req, res, next) {
  var context = {
    routes: routes, location: req.url
  };
  Router.create(context).run(ran);
  function ran (Handler, state) {
    var data = req.model || {};
    var doctype = '<!doctype html>';
    var main = React.renderToString(<Handler data={data} />);
    var full = React.renderToString(<Layout  data={data} main={main} />);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(doctype + full);
    res.end();
  }
};
