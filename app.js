import './lib/uncaught'

import express from 'express'
import controllers from './controllers'
import router from './router'

import winston from 'winston'
import compression from 'compression'
import serveStatic from 'serve-static'
import serveFavicon from 'serve-favicon'

import env from './lib/env'
import logging from './lib/logging'
import errorHandler from './lib/errorHandler'
import analytics from './services/analytics'

var port = env('PORT')
var debug = env('BUILD_DISTRIBUTION') === 'debug'
var app = express()

winston.info('executing:', process.argv.join(' '))
winston.info('environment: %s, distribution: %s, build: %s',
  env('NODE_ENV'), env('BUILD_DISTRIBUTION'), env('BUILD_VERSION')
)

if (debug) {
  app.use(require('morgan')(':method :url :status', { stream: logging.stream('debug') }))
}

app.locals.settings['x-powered-by'] = false
app.use(compression())
app.use(serveStatic('.bin/public'))
app.use(serveFavicon('.bin/public/favicon.ico'))
app.use(track)

controllers(app)

app.use(router)
app.use(errorHandler)
app.listen(port, listening)

function track (req, res, next) {
  analytics.trackPage(req.url)
  next()
}

function listening () {
  winston.info('express listening on port', port)
}
