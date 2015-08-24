import React from 'react'
import OpenSourceProject from './project'

export default class OpenSource extends React.Component {
  render () {
    var {projects} = this.props.data
    return <article className='ly-content ly-section'>
      <h1 className='ly-header os-name'>Open-Source <span className='c-pink'>❤</span>️</h1>
      <h2 className='os-role'>My contributions to many open-source modules</h2>
      <p>I wrote hundreds of open-source modules for both front-end development and Node &mdash; even my <a href='https://github.com/ponyfoo/ponyfoo' title='Source code for Pony Foo' target='_blank'>blog</a> and this <a href='https://github.com/bevacqua/bevacqua.io' title='Source code for bevacqua.io' target='_blank'>site</a> are open-source. You can find all of them on <a href='/code' target='_blank'>GitHub</a>. The vast majority of my work is <a href='https://github.com/bevacqua/lipstick' target='_blank'>around</a> <a href='https://github.com/bevacqua/sluggish' target='_blank'>a</a> <a href='https://github.com/bevacqua/crossvent' target='_blank'>lot</a> <a href='https://github.com/bevacqua/sell' target='_blank'>of</a> <a href='https://github.com/bevacqua/local-storage' target='_blank'>simple</a> <a href='https://github.com/bevacqua/omnibox' target='_blank'>JavaScript</a> <a href='https://github.com/bevacqua/insane' target='_blank'>modules</a> and <a href='https://github.com/bevacqua/hget' target='_blank'>helpful</a> <a href='https://github.com/bevacqua/reaver' target='_blank'>command-line</a> <a href='https://github.com/bevacqua/cave' target='_blank'>utilities</a>, as well as <a href='https://github.com/bevacqua/perfschool' target='_blank'>workshops</a> and the occassional browser  <a href='https://github.com/bevacqua/ftco' target='_blank'>extension</a>. I've also hosted <a href='https://github.com/bevacqua/js' target='_blank'>JavaScript</a> and <a href='https://github.com/bevacqua/css' target='_blank'>CSS</a> quality guides on GitHub.</p>
      <p>Not everything I open-source is serious. I had fun coming up with <a href='https://github.com/bevacqua/hit-that' target='_blank'>a</a> <a href='https://github.com/taunus/giffy.club' target='_blank'>few</a>  <a href='https://github.com/bevacqua/hubby' target='_blank'>silly</a> <a href='https://github.com/bevacqua/gitcanvas' target='_blank'>projects</a> <a href='https://github.com/bevacqua/cube' target='_blank'>as</a> <a href='https://github.com/bevacqua/hubot-yandex-translate' target='_blank'>well</a>.</p>
      <p>Below, you can find a few of the projects I enjoy maintaining and working on.</p>
      <section>
      {
        projects.map((project) => {
          return <OpenSourceProject key={project.name} data={project}/>
        })
      }
      </section>
    </article>
  }
}
