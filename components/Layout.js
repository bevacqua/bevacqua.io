import React from 'react';
import DocumentTitle from 'react-document-title';
import DocMeta from 'react-doc-meta';

export default class Layout extends React.Component {
  render () {
    const { main, data } = this.props;
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
          <a id='top' href='#navigation' className='nv-link nv-anchor'></a>
          <main className='ly-main' dangerouslySetInnerHTML={{__html: main}} />
          <footer className='dn-help'><p>You can support my writing, speaking, and open-source contributions through <a href='https://www.patreon.com/bevacqua' target='_blank'>Patreon</a>. You can also <a href='/consulting' target='_blank'>hire me</a> as a consultant.</p></footer>
          <nav id='navigation' className='nv-nav'>
            <ul className='nv-list'>
              <li className='nv-item'><a href='/' className='nv-link nv-home'>/</a></li>
              <li className='nv-item'><a href='/consulting' className='nv-link' target='_blank'>Consulting</a></li>
              <li className='nv-item'><a href='/talks' className='nv-link'>Conference Talks</a></li>
              <li className='nv-item'><a href='/opensource' className='nv-link'>Open-Source ️️️<span className='c-pink'>❤️️</span></a></li>
              <li className='nv-item'><a href='/buildfirst' className='nv-link'>JavaScript Application Design</a></li>
              <li className='nv-item'><a href='/blog' className='nv-link' target='_blank'>Articles</a></li>
              <li className='nv-item'><a href='/twitter' className='nv-link nv-last' target='_blank'>Tweets</a></li>
              <li className='nv-item nv-top'><a href='#top' className='nv-link'>Back to Top</a></li>
            </ul>
          </nav>
          <script dangerouslySetInnerHTML={{__html: 'var __STATE__=' + JSON.stringify(data)}}></script>
          <script async src='/js/all.js'></script>
        </body>
      </html>
    );
  }
};
