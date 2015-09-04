import React from 'react'

export default class Presentation extends React.Component {
  render () {
    var { title, description, speakerdeck, youtube, vimeo, resources } = this.props.data
    return <li className='pt-container'>
      <h2 className='pt-title'>{title}</h2>
      <section className='pt-embed-container'>
        <div className='pt-embeds'>
        {
          youtube && <section className='pt-video pt-youtube'>
            <iframe src={youtube} className='pt-video-frame pt-youtube-frame' frameBorder='0' webkitAllowFullScreen mozAllowFullScreen AllowFullScreen></iframe>
          </section>
        }
        {
          vimeo && <section className='pt-video pt-vimeo'>
            <iframe src={vimeo} className='pt-video-frame pt-vimeo-frame' frameBorder='0' webkitAllowFullScreen mozAllowFullScreen AllowFullScreen></iframe>
          </section>
        }
        {
          speakerdeck && <section className='pt-speakerdeck'>
            <script data-id={speakerdeck.id} data-ratio={speakerdeck.ratio} src='//speakerdeck.com/assets/embed.js' className='speakerdeck-embed' async />
          </section>
        }
        </div>
      </section>
      <section className='pt-description'><p className='pt-description-text'>{description}</p></section>
      {
        resources && resources.length && <ul className='pt-resources'>
        {
          resources.map((r) => {
            return <li key={r.url} className='pt-resource'>
              <a href={r.url} target='_blank' dangerouslySetInnerHTML={{__html: r.title}} />
            </li>
          })
        }
        </ul>
      }
    </li>
  }
}
