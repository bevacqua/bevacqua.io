'use strict'

import './vendor/ga'
import './vendor/mixpanel'
import './analytics'

import React from 'react/addons'
import Router from 'react-router'
import routes from '../../routes'

var main = document.getElementsByTagName('main')[0]

Router.run(routes, Router.HistoryLocation, ran)

function ran (Handler, state) {
  React.render(<Handler data={global.__STATE__} />, main)
}
