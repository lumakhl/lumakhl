import React from 'react';

const audios = [{
  name: 'background_music',
  path: 'bensound-ukulele.mp3',
  loop: true,
  volume: 0.25
}]

export default class Audio extends React.Component {

  render() {
    return (
      <div id="audios">
      {
        audios.map(audio => (
          <audio 
            key={this.formatAudioId(audio.name)}
            id={this.formatAudioId(audio.name)}
            src={require(`assets/${audio.path}`)}
            loop={audio.loop || false}
            >
          </audio>
          )
        )
      }
      </div>
    );
  }

  componentDidMount() {
    audios.filter(({ loop }) => loop)
      .map((audio) => {
        const audioEl = document.getElementById(this.formatAudioId(audio.name));
        audioEl.volume = audio.volume || 1;
        return audioEl;
      })
      .forEach(audioEl => {
        audioEl.play();
      });
  }

  formatAudioId(name) {
    return `audio_${name}`;
  }

}