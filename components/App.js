import React from 'react';
import {RouteHandler} from 'react-router';
import DocumentTitle from 'react-document-title';
import DocMeta from 'react-doc-meta';

export default class App extends React.Component {
  render () {
    var tags = [
      { name: 'description', content: 'hello' }
    ];
    return <DocumentTitle title='bevacqua.io &mdash; JavaScript and Performance Consultant. Conference Speaker. Author. Blogger.'>
      <DocMeta tags={tags}>
        <RouteHandler />
      </DocMeta>
    </DocumentTitle>
  }
};
