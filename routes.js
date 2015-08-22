'use strict';

import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import App from './components/app';
import HomeIndex from './components/home/index';
import Talks from './components/home/talks';
import BuildFirst from './components/home/buildfirst';

export default (
  <Route handler={App} path='/'>
    <DefaultRoute handler={HomeIndex} />
    <Route path='/talks' handler={Talks} />
    <Route path='/buildfirst' handler={BuildFirst} />
  </Route>
);
