import React from 'react';
import {RouteHandler} from 'react-router';
import DocumentTitle from 'react-document-title';
import DocMeta from 'react-doc-meta';

export default class App extends React.Component {
  render () {
    var tags = [
      // default meta tags go here
    ];
    return <DocumentTitle title='Nicolás Bevacqua &mdash; JavaScript and Web Performance Consultant. Conference Speaker. Author. Blogger. Open-Source'>
      <DocMeta tags={tags}>
        <RouteHandler data={this.props.data} />
      </DocMeta>
    </DocumentTitle>
  }
};
