import React from 'react'

export default class HomeIndex extends React.Component {
  render () {
    return <article className='ly-content ly-section'>
      <h1 className='ly-header hm-name'>Nicolas Bevacqua</h1>
      <h2 className='hm-role'>JavaScript and Web Performance Consultant</h2>
      <section className='hm-section'>
        <p className='hm-about'>I <span className='c-pink'>❤</span>️ the web. I am a <a href='/consulting' target='_blank'>consultant</a>, a conference <a href='/talks'>speaker</a>, the author of <a href='/buildfirst'>JavaScript Application Design</a>, an <a href='/blog'>opinionated blogger</a>, and an <a href='/opensource'>open-source</a> evangelist. I participate actively in the online JavaScript <a href='/twitter'>community</a> &mdash; as well as <em>offline</em> in beautiful Buenos Aires.</p>
        <p>I like writing about the current <a href='https://ponyfoo.com/articles/stop-breaking-the-web' title='Stop Breaking the Web' target='_blank'>state of the web</a>, new features coming our way in <a href='https://ponyfoo.com/articles/tagged/es6-in-depth' title='ES6 in Depth'>ES6</a>, leveraging <a href='https://ponyfoo.com/articles/talk-about-web-performance' title="Let's talk about Web Performance" target='_blank'>web performance</a> optimization to make our sites much faster, the importance of <a href='https://ponyfoo.com/articles/progressive-web' title='The Progressive Web' target='_blank'>progressive enhancement</a>, sane <a href='https://ponyfoo.com/articles/gulp-grunt-whatever' title='Gulp, Grunt, Whatever' target='_blank'>build processes</a> and improving quality in your applications with <a href='https://ponyfoo.com/articles/why-i-write-plain-javascript-modules' title='Why I Write Plain JavaScript Modules' target='_blank'>modular design</a>. I used to spend a lot of my time answering questions on <a href='/stackoverflow' target='_blank'>Stack Overflow</a>, but now I spend most that time doing open-source work instead.</p>
        <p>I really enjoy developing small open-source modules that I publish to <code>npm</code> and <a href='/code' target='_blank'>GitHub</a>. Some of these are small utilities that work well in both Node.js and the browser, and some others are front-end components that make it easier to use certain parts of the web. My favorite approach to open-source is developing small modules because that way you can <em>compose</em> them in interesting ways and it also fosters <em>reusability</em>. Learning how to write modular code is one of the most valuable things you can do to improve your skills as a JavaScript developer.</p>
        <p>I've used a variety of tools when it comes to development. Trying out many different tools, <em>creating some of your own</em>, and experimenting are the best ways to really understand how they work and the tradeoffs between all the different tools and frameworks out there. If it's up to me, I like simple solutions. That's why I prefer to use <code>npm run</code> and Bash in my builds. I also like <a href='http://facebook.github.io/react/' title='Facebook React' target='_blank'>React</a> and <a href='http://taunus.io' title='Taunus Universal MVC' target='_blank'>Taunus</a> when it comes to view rendering, because they're <strong>simpler and more performant</strong> than anything else in the JavaScript framework landscape. I use AWS for deployments because I like having fine-grained control, but I've also experimented with other providers like Heroku and Digital Ocean.</p>
        <p>Re-inventing the wheel is <strong>a necessary evil</strong> if we want to learn from mistakes made in the past <em>(regardless of who made them)</em>.</p>
        </section>
        <section className='hm-section hm-photo-section'>
          <a href='/blog' title='Pony Foo' target='_blank'><img className='hm-photo' src='/img/me.jpg' alt='Pony Foo' /></a>
          <sub className='hm-photo-disclaimer'>Disclaimer: it might be possible that I don't look this good anymore.</sub>
        </section>
    </article>
  }
}
