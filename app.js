'use strict';

import './lib/uncaught';

import express from 'express';
import router from './router';

import winston from 'winston';
import compression from 'compression';
import serveStatic from 'serve-static';
import serveFavicon from 'serve-favicon';

import env from './lib/env';
import logging from './lib/logging';
import errorHandler from './lib/errorHandler';
import analytics from './services/analytics';
import links from './dat/buildfirst/links.json';

var port = env('PORT');
var debug = env('BUILD_DISTRIBUTION') === 'debug';
var app = express();

winston.info('executing:', process.argv.join(' '));
winston.info('environment: %s, distribution: %s, build: %s',
  env('NODE_ENV'), env('BUILD_DISTRIBUTION'), env('BUILD_VERSION')
);

if (debug) {
  app.use(require('morgan')(':method :url :status', {
    stream: logging.stream('debug')
  }));
}

app.locals.settings['x-powered-by'] = false;
app.use(compression());
app.use(serveStatic('.bin/public'));
app.use(serveFavicon('.bin/public/favicon.ico'));
app.use(track);
app.get('/consulting', to('mailto:consulting@bevacqua.io'));
app.get('/blog', to('http://ponyfoo.com'));
app.get('/career', to('http://careers.stackoverflow.com/bevacqua'));
app.get('/opensource', to('https://github.com/bevacqua')); // TODO: make it a view
app.get('/code', to('https://github.com/bevacqua'));
app.get('/github', to('https://github.com/bevacqua/bevacqua.io'));
app.get('/stackoverflow', to('http://stackoverflow.com/users/389745/nico'));
app.get('/twitter', to('https://twitter.com/nzgb'));
app.get('/bf', to('/buildfirst', 301));
app.get('/bf/resources', to('/buildfirst/resources', 301));
app.get('/bf/:key', expand, to('/buildfirst/resources'));
app.use(router);
app.use(errorHandler);
app.listen(port, listening);

function track (req, res, next) {
  analytics.trackPage(req.url);
  next();
}

function expand (req, res, next) {
  var key = req.params.key;
  var link = links[key];
  if (link){
    to(link.url)(req, res, next); return;
  }
  next();
}

function to (url, status) {
  return (req, res) => res.status(status || 302).redirect(url);
}

function listening () {
  winston.info('express listening on port', port);
}
