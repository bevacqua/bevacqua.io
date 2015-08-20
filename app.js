'use strict';

import './lib/uncaught';

import express from 'express';
import hbs from 'express-handlebars';
import Router from 'react-router';
import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import routes from './routes';

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

app.engine('html', hbs({ extname: 'html' }));
app.set('view engine', 'html');
app.locals.settings['x-powered-by'] = false;

if (debug) {
  app.use(require('morgan')(':method :url :status', {
    stream: logging.stream('debug')
  }));
}

app.use(compression());
app.use(serveStatic('.bin/public'));
app.use(serveFavicon('.bin/public/favicon.ico'));
app.use(track);
app.get('/blog', to('http://ponyfoo.com'));
app.get('/career', to('http://careers.stackoverflow.com/bevacqua'));
app.get('/code', to('https://github.com/bevacqua'));
app.get('/source', to('https://github.com/bevacqua/bevacqua.io'));
app.get('/stackoverflow', to('http://stackoverflow.com/users/389745/nico'));
app.get('/twitter', to('https://twitter.com/nzgb'));
app.get('/plus', to('https://plus.google.com/+NicoBevacqua'));
app.get('/bf', to('/buildfirst', 301));
app.get('/bf/resources', to('/buildfirst/resources', 301));
app.get('/bf/:key', expand, to('/buildfirst/resources'));
// app.get('/buildfirst', view('buildfirst/landing'));
// app.get('/buildfirst/resources', view('buildfirst/resources'));
// app.get('/', view('home/landing'));
// app.get('/about', view('home/about'));
// app.get('/talks', view('/landing'));
// app.get('/talks/frontend-ops', view('talks/frontend-ops'));
// app.get('/talks/browserify-all-the-things', view('talks/browserify-all-the-things'));
// app.get('/talks/high-performance-critical-path', view('talks/high-performance-critical-path'));

app.use(router);
app.use(errorHandler);
app.listen(port, listening);

function track (req, res, next) {
  analytics.trackPage(req.url);
  next();
}

app.use(router);
function router (req, res, next) {
  var version = env('BUILD_VERSION');
  var context = {
    routes: routes, location: req.url
  };
  Router.create(context).run(ran);
  function ran (Handler, state) {
    var html = React.renderToString(<Handler />);
    var title = DocumentTitle.rewind();
    res.render('layout', {
      version: version,
      title: title,
      reactHtml: html
    });
  }
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
