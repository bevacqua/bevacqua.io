import React from 'react'

export default class BuildFirstResources extends React.Component {
  render () {
    var {resources} = this.props.data

    return <article className='ly-content ly-section'>
      <h1 className='ly-header bf-name'>JavaScript Application Design</h1>
      <h2 className='bf-tagline'>Write clean JavaScript applications that deploy with the push of a button</h2>
      <p className='bf-teaser'>Access reference links, get the code</p>
      <section className='bf-section'>
        <h3 className='ly-header'>JavaScript Application Design Related Material</h3>
        <p>For your convenience, all the resources mentioned in the book can be found below, in case you're too busy to type them into your browser by hand. You'll find the complete companion code for the book here as well.</p>
        <ul className='bf-actions'>
          <li>The <a href='/buildfirst' title='JavaScript Application Design'>landing page</a> explains the contents discussed in the book in more detail</li>
          <li>Read <a target='_blank' href='/blog' title='Pony Foo Blog'>my blog</a> to learn more about my coding philosophy</li>
          <li>Check out the <a href='/bf/code' target='_blank' title='Check out the Code!'>code samples</a> on GitHub</li>
          <li>Purchase the book through <a href='/bf/book' target='_blank' title='Get the book from Manning!'>Manning</a></li>
        </ul>
      </section>
      <section className='bf-section bf-cover'>
        <a href='/bf/book' target='_blank'><img className='bf-cover-image' src='/img/buildfirst/cover.jpg' alt='JavaScript Application Design' /></a>
        <sub>Psst! Download <a href='/bf/book' target='_blank'>free sample chapters here</a>.</sub>
      </section>
      <ul className='bfr-list'>
      {
        resources.map((r) => {
          return r.title && <li className='bfr-item' key={r.url}>
            <span className={'ic-icon bfr-icon bfr-' + r.key} />
            <a href={'/bf/' + r.key} target='_blank' className={'ic-icon ic-' + r.type} title={r.url}>{r.title}</a>
            <div className='bfr-description' dangerouslySetInnerHtml={{__html: r.description}} />
          </li>
        })
      }
      </ul>
    </article>
  }
}
