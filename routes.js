'use strict';

import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from './components/app';
import HomeIndex from './components/home/index';

export default (
  <Route handler={App} path='/'>
    <DefaultRoute handler={HomeIndex} />
  </Route>
);
