'use strict';

require('./env');
require('./src/srv/uncaught.js');

var path = require('path');
var forky = require('forky');
var logger = require('./src/lib/logger');
var app = path.join(__dirname, 'app.js');

forky(app);
forky.log = logger.debug;