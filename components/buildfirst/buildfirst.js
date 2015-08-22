import React from 'react'

export default class BuildFirst extends React.Component {
  render () {
    return <article className='ly-content ly-section'>
      <h1 className='ly-header bf-name'>JavaScript Application Design</h1>
      <h2 className='bf-tagline'>Write clean JavaScript applications that deploy with the push of a button</h2>
      <p className='bf-teaser'>You already know JavaScript, but do you know how to design <em>a scalable application</em> and maximize your productivity? Try <a className='bf-teaser-link' href='https://twitter.com/#buildfirst' target='_blank'>#buildfirst</a></p>
      <section className='bf-section'>
        <h3 className='ly-header'>Build Early, Build Always</h3>
        <p>Learn how to craft a workflow that increases your development productivity and reduces issues during deployments. Automate that workflow using <a target='_blank' href='http://gruntjs.com/' title='Grunt: JavaScript Task Runner'>Grunt</a>, and <em>master</em> <strong>Continuous Development, Integration, and Deployment</strong>. <em>Minimize manual labor</em>, while keeping productivity in check.</p>
        <p>Concretely, the book teaches the <em>importance</em> of a <strong>Build Process</strong>, and once that's out of the way, we will examine how to deploy and set up a continuous integration flow, all using <strong>Grunt</strong>. Grunt is a task automation utility based on <a target='_blank' href='http://nodejs.org/' title='Node.js is a platform built on V8'>Node.js</a>, equivalent to more widely known tools such as <a target='_blank' href='http://www.gnu.org/software/make/' title='GNU Make Build Tool'>Make</a>, or <a target='_blank' href='http://ant.apache.org/' title='Apache Ant'>Ant</a>. Grunt is more <em>modern</em>, <em>faster</em> to learn, and <em>written in JavaScript</em>, becoming an ideal choice for the book, which <strong>focuses on the process and the tasks</strong>, not <em>just</em> on the tooling.</p>
        <h3>Design Early, Design Often</h3>
        <p>Design your application early, but also <em>explore techniques</em> to keep it in check continuously using <a target='_blank' href='http://www.martinfowler.com/ieeeSoftware/continuousDesign.pdf' title='Fowler on Continuous Design'>Continuous Design</a> techniques. Write <em>modular, cleaner, and easily testable</em> code.</p>
        <h3>Learn from Practical Examples</h3>
        <p>Scattered throughout the book we will find <em>tons of code samples</em>, all carefully crafted, ready to use and mold to your needs, and <strong>ideal to learn from</strong>. The samples are <em>well-documented</em> too, each having <em>an individual description</em> which will let us understand what we're looking at, why we need to learn it, and how we might accomplish it.</p>
        <h2>Uncertain yet?</h2>
        <p>You can get a sample chapter from <strong>Manning</strong>, or just buy the whole thing if you like what you're hearing. It's definitely worth it!</p>
        <p>Also, make sure you check out the <a target='_blank' href='/buildfirst/resources' title='Resources and References'>resources page</a> for the book, too. I included <strong>tons of the links</strong> that are referenced in the book in that page, so you can get a feel of the kind of content that's included in the book. You could also skim through <a target='_blank' href='/bf/code' title='Accompanying code samples and snippets'>the code samples</a>, which are religiously documented, catalogued, and reviewed. Ready for human consumption!</p>
        <ul className='bf-actions'>
          <li>Read <a target='_blank' href='/blog' title='Pony Foo Blog'>my blog</a> to learn more about my coding philosophy</li>
          <li>Purchase the book through <a href='/bf/book' target='_blank' title='Get the book from Manning!'>Manning</a></li>
          <li>Check out the <a href='/bf/code' target='_blank' title='Check out the Code!'>code samples</a> on GitHub</li>
        </ul>
      </section>
      <section className='bf-section bf-cover'>
        <a href='/bf/book' target='_blank'><img className='bf-cover-image' src='/img/buildfirst/cover.jpg' alt='JavaScript Application Design' /></a>
        <sub>Psst! Download <a href='/bf/book' target='_blank'>free sample chapters here</a>.</sub>
      </section>
    </article>
  }
}
