import $ from 'dominus'
import React from 'react'
import Presentation from './presentation'

export default class Talks extends React.Component {
  render () {
    var presentations = [{
      key: 'high-perf-critical-path',
      title: 'High Performance in the Critical Path',
      speakerdeck: { id: '2ea137647c734b54b37012db8a596b28', ratio: 1.33333333333333 }
    }, {
      key: 'browserify-all-the-things',
      title: 'Browserify All the Things',
      speakerdeck: { id: 'd74647f010a201324de17ae407783e32', ratio: 1.77777777777778 },
      youtube: 'https://www.youtube.com/embed/uZ_1_fddWns'
    }, {
      key: 'front-end-ops',
      title: 'Front-End Ops',
      speakerdeck: { id: 'acbdab30c7f801316c2c42baa33a3298', ratio: 1.77777777777778 },
      youtube: 'https://www.youtube.com/embed/Y0DCZdAruvo'
    }];
    return <article className='ly-content'>
      <h1>Conference Talks</h1>
      <p>I gave my first conference talk at JSConf US 2014 in Amelia Island. I've given talks at <a href='http://lanyrd.com/profile/bevacqua/'>many other</a> conferences since then. This page is updated with presentation slides and conference talk videos as they become available online. For upcoming appearances refer to my <a href='http://lanyrd.com/profile/bevacqua/'>Lanyrd profile</a>. If you want me at your conference, shoot me <a className='tk-email' href='#'>an email</a>.</p>
      {
        presentations.map((presentation) => {
          return <Presentation key={presentation.key} data={presentation}/>
        })
      }
    </article>
  }
  componentDidMount () {
    $('.tk-email', React.findDOMNode(this)).attr('href', 'mailto:talks@bevacqua.io');
  }
}
