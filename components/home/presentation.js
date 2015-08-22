import React from 'react'

export default class Presentation extends React.Component {
  render () {
    var { speakerdeck, youtube } = this.props.data;
    return <section>
      {
        speakerdeck && <script data-id={speakerdeck.id} data-ratio={speakerdeck.ratio} src='//speakerdeck.com/assets/embed.js' className='speakerdeck-embed' async />
      }
      {
        youtube && <iframe src={youtube} width='560' height='315' frameBorder='0' allowFullScreen></iframe>
      }
    </section>
  }
}
