import React from 'react';
import {RouteHandler} from 'react-router';
import DocumentTitle from 'react-document-title';

export default class App extends React.Component {
  render () {
    return <DocumentTitle title='bevacqua.io &mdash; JavaScript and Performance Consultant. Conference Speaker. Author. Blogger.'>
      <RouteHandler />
    </DocumentTitle>
  }
};
