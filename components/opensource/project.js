import React from 'react'
import localStorage from 'local-storage'
import xhr from 'xhr'
import {concurrent} from 'contra'
import vagueTime from 'vague-time'

export default class OpenSourceProject extends React.Component {
  render () {
    var { repo, name, teaser, description, screenshot } = this.props.data
    var { meta } = this.state || {}
    return <section className='osp-container'>
      <h3 className='osp-name'>
        <a className='osp-link' href={'https://github.com/' + repo} title='Check out the repository!' target='_blank'>{name}</a>
      </h3>
      {
        meta && <span className='osp-meta'>
          <em className='osp-updated'>
            <span>(last updated </span>
            <a href={'https://github.com/' + repo + '/commit/' + meta.sha} target='_blank' title={meta.updated.toString()}>
              {vagueTime.get({ to: meta.updated, units: 's' })}
            </a>
            <span>)</span>
          </em>
          <span>★ {meta.stars}</span>
        </span>
      }
      <h4 className='osp-teaser'>{teaser}</h4>
      <div dangerouslySetInnerHTML={{__html: description}} />
      {
        screenshot && <div className='osp-screenshot-container'>
          <a className='osp-screenshot-link' href={'https://github.com/' + repo} title='Check out the repository!' target='_blank'>
            <img src={screenshot} alt={'Screenshot of ' + name} />
          </a>
        </div>
      }
    </section>
  }
  componentDidMount () {
    var { repo } = this.props.data
    var key = 'repos/' + repo
    var cache = localStorage.get(key)
    var earlier = new Date()
    earlier.setHours(earlier.getHours() - 6)
    if (cache && new Date(cache.date) > earlier) {
      cache.value.updated = new Date(cache.value.updated)
      this.setState({ meta: cache.value })
      return
    }
    concurrent({
      repo: next => query('/repos/' + repo, next),
      master: next => query('/repos/' + repo + '/branches/master', next)
    }, ::this.pulledRepo)
    function query (url, next) {
      var options = {
        url: 'https://api.github.com' + url,
        headers: { Accept: 'application/vnd.github.v3+json' },
        json: true
      }
      xhr(options, (err, res, body) => next(err || res.statusCode > 399, body))
    }
  }
  pulledRepo (err, result) {
    if (err) {
      return
    }
    var { repo } = this.props.data
    var key = 'repos/' + repo
    var meta = {
      updated: new Date(result.master.commit.commit.author.date),
      sha: result.master.commit.sha,
      stars: result.repo.stargazers_count
    }
    var cache = {
      date: new Date(),
      value: meta
    }
    this.setState({ meta: meta })
    localStorage.set(key, cache)
  }
}
