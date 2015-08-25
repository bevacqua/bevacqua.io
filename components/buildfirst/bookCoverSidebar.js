import React from 'react'
import {State} from 'react-router'

export default React.createClass({ // because extends React.Component doesn't support mixins
  mixins: [State],
  render () {
    var summary = this.getPathname() === '/buildfirst'
    var link = (summary ?
      <a href='/buildfirst/resources'>resources</a> :
      <a href='/buildfirst'>summary</a>
    )
    return <section className='bf-section bf-cover'>
      <a href='/bf/book' target='_blank'><img className='bf-cover-image' src='/img/buildfirst/cover.jpg' alt='JavaScript Application Design' /></a>
      <p className='bf-cover-note'>Psst! Download <a href='/bf/book' target='_blank'>free sample chapters here</a>.</p>
      <p className='bf-cover-note'>Purchase from <a href='/bf/book/amazon' target='_blank'>Amazon</a> or <a href='/bf/book' target='_blank'>Manning</a>.</p>
      <p className='bf-cover-note'>See also {link} and <a href='/bf/code' target='_blank'>code samples</a>.</p>
    </section>
  }
})
