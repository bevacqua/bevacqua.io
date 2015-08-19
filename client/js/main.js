'use strict';

require('./vendor/ga');
require('./vendor/mixpanel');
require('./analytics');

import React from 'react/addons';
import Router from 'react-router';
import routes from '../../routes';

var main = document.getElementsByTagName('main')[0];

Router.run(routes, Router.HistoryLocation, ran);

function ran (Handler, state) {
  React.render(<Handler />, main);
}
