var express = require('express')
var redirects = require('./redirects')

var winston = require('winston')

var env = require('./lib/env')
var logging = require('./lib/logging')
var errorHandler = require('./lib/errorHandler')
var analytics = require('./services/analytics')

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
app.use(track)
redirects(app)

app.use(errorHandler)
app.listen(port, listening)

function track (req, res, next) {
  analytics.trackPage(req.url)
  next()
}

function listening () {
  winston.info('express listening on port', port)
}
