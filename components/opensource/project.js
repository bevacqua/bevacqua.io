import React from 'react'

export default class OpenSourceProject extends React.Component {
  render () {
    var { repo, name, teaser, description, screenshot } = this.props.data
    return <section className='osp-container'>
      <h3 className='osp-name'>
        <a className='osp-link' href={repo} title='Check out the repository!' target='_blank'>{name}</a>
      </h3>
      <h4 className='osp-teaser'>{teaser}</h4>
      <div dangerouslySetInnerHTML={{__html: description}} />
      {
        screenshot && <div className='osp-screenshot-container'>
          <a className='osp-screenshot-link' href={repo} title='Check out the repository!' target='_blank'>
            <img src={screenshot} alt={'Screenshot of ' + name} />
          </a>
        </div>
      }
    </section>
  }
}
