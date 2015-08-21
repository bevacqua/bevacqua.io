import React from 'react';
import DocumentTitle from 'react-document-title';
import DocMeta from 'react-doc-meta';

export default class Layout extends React.Component {
  render () {
    const { main } = this.props;
    return (
      <html>
        <head>
          <title>{DocumentTitle.rewind()}</title>
          <meta charSet='utf-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {
            DocMeta.rewind().map((tag, index) =>
              <meta key={index} {...tag} data-doc-meta='true' />
            )
          }
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900' />
        </head>
        <body className='io-body io-font'>
          <main dangerouslySetInnerHTML={{__html: main}} />
          <script src='/js/all.js'></script>
        </body>
      </html>
    );
  }
};
