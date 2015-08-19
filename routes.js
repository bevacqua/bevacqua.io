'use strict';

import React from 'react';
import {DefaultRoute, NotFoundRoute, Route} from 'react-router';
import HomeIndex from './components/home/index'

export default [
  <Route path='/' handler={HomeIndex}>
  </Route>
];
