import React from 'react'
import Presentation from './presentation'

export default class Talks extends React.Component {
  render () {
    var presentations = [{
      key: 'high-perf-critical-path',
      title: 'High Performance in the Critical Path',
      description: "This talk covers the past, present and future of web application performance when it comes to delivery optimization. I'll start by glancing over what you're already doing -- minifying your static assets, bundling them together, and using progressive enhancement techniques. Then I'll move on to what you should be doing -- optimizing TCP network delivery, inlining critical CSS, deferring font loading and CSS so that you don't block the rendering path, and of course deferring JavaScript. Afterwards we'll look at the future, and what HTTP 2.0 has in store for us, going full circle and letting us forego hacks of the past like bundling and minification.",
      speakerdeck: { id: '2ea137647c734b54b37012db8a596b28', ratio: 1.33333333333333 },
      vimeo: 'https://player.vimeo.com/video/131634704',
      resources: [
        { title: 'Web Page Test', url: 'http://www.webpagetest.org/' },
        { title: 'High Performance Browser Networking', url: 'http://chimera.labs.oreilly.com/books/1230000000545' },
        { title: 'Self-guided NodeSchool <code>perfschool</code> Workshop', url: 'https://github.com/bevacqua/perfschool' },
        { title: 'JavaScript Application Design', url: '/buildfirst' },
        { title: 'Article: Let\'s talk about Web Performance', url: 'https://ponyfoo.com/articles/talk-about-web-performance' },
        { title: 'Article: Fixing Performance in the Web Stack', url: 'https://ponyfoo.com/articles/fixing-web-performance' }
      ]
    }, {
      key: 'browserify-all-the-things',
      title: 'Browserify All The Things',
      description: "This talk is about how to use browserify to develop front-end modular code using Common.JS, and how those modules should be documented, designed, and released using an automated build system. In order to explain these concepts I'll walk you through a few of my own open-source creations, highlighting interesting points as we go along.",
      speakerdeck: { id: 'd74647f010a201324de17ae407783e32', ratio: 1.77777777777778 },
      youtube: 'https://www.youtube.com/embed/uZ_1_fddWns',
      resources: [
        { title: 'Browserify Handbook', url: 'https://github.com/substack/browserify-handbook' },
        { title: 'Task automation with <code>npm run</code>', url: 'http://substack.net/task_automation_with_npm_run' },
        { title: 'JavaScript Application Design', url: '/buildfirst' }
      ]
    }, {
      key: 'front-end-ops-tooling',
      title: 'Front End Ops Tooling',
      description: "This talk covers build tooling, processes, and your development workflow. You’ll get a glimpse as to why you should be building, and why you should put together a build process from the get-go. Then we’ll move on to tooling. Here I’ll discuss some of the most popular JavaScript build tools, namely Grunt, Gulp, and npm. We’ll investigate how each one performs for certain tasks, and I’ll help you forge your own build sword. Lastly, I’ll discuss the benefits of going for the module format Node.js uses, which is Common.js, and how you can leverage those modules in the browser, using a tool called Browserify.",
      speakerdeck: { id: 'acbdab30c7f801316c2c42baa33a3298', ratio: 1.77777777777778 },
      youtube: 'https://www.youtube.com/embed/Y0DCZdAruvo',
      resources: [
        { title: 'Gulp, Grunt, Whatever', url: 'https://ponyfoo.com/articles/gulp-grunt-whatever' },
        { title: 'Grunt, Gulp, or <code>npm run</code>?', url: 'https://ponyfoo.com/articles/choose-grunt-gulp-or-npm' },
        { title: 'JavaScript Application Design', url: '/buildfirst' }
      ]
    }]
    return <article className='ly-content'>
      <section className='tk-introduction'>
        <h1 className='ly-header tk-name'>Conference Talks</h1>
        <h2 className='tk-role'>I like speaking about the open web</h2>
        <p>I gave my first conference talk at JSConf US 2014 in Amelia Island. I've given talks at <a href='http://lanyrd.com/profile/bevacqua/past' target='_blank'>many other</a> conferences all over the world since then. For upcoming appearances refer to my <a href='http://lanyrd.com/profile/bevacqua/' target='_blank'>Lanyrd profile</a>. If you want me at your conference, shoot me <a href='/consulting' target='_blank'>an email</a> &mdash; I'll be happy to discuss it.</p>
        <p>This page is updated with presentation slides, conference talk videos, and related materials as they become available online.</p>
      </section>
      <ol className='tk-presentations'>
      {
        presentations.map((presentation) => {
          return <Presentation key={presentation.key} data={presentation}/>
        })
      }
      </ol>
    </article>
  }
}
