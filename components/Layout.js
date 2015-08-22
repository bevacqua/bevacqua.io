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
          <link rel='stylesheet' href='/css/all.css' />
        </head>
        <body>
          <nav className='ly-nav'>
            <ul className='nv-list'>
              <li className='nv-item'><a href='/' className='nv-link nv-home'>/</a></li>
              <li className='nv-item'><a href='/talks' className='nv-link'>Presentations</a></li>
              <li className='nv-item'><a href='/blog' className='nv-link'>Articles</a></li>
              <li className='nv-item'><a href='/buildfirst' className='nv-link'>JavaScript Application Design</a></li>
              <li className='nv-item'><a href='/code' className='nv-link'>Open-Source ️️️❤️</a></li>
              <li className='nv-item'><a href='/twitter' className='nv-link'>Tweets</a></li>
            </ul>
          </nav>
          <main className='ly-main' dangerouslySetInnerHTML={{__html: main}} />
          <script src='/js/all.js'></script>
        </body>
      </html>
    );
  }
};
