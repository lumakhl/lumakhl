import React from 'react';

const audios = [{
  name: 'background_music',
  path: 'bensound-ukulele.mp3',
  loop: true,
  volume: 0.2
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
        if (audio.volume) {
          this.fadeIn(audioEl, audio.volume);
        }
        return audioEl;
      })
      .forEach(audioEl => {
        audioEl.play();
      });
  }

  formatAudioId(name) {
    return `audio_${name}`;
  }

  fadeIn(audioEl, volume) {
    const fadeInTimeMs = 10000;
    const fadeInParticles = 1000;
    const fadeInProgressionTime = fadeInTimeMs / fadeInParticles;
    const audioParticle = volume / fadeInParticles;

    audioEl.volume = 0;
    const intervalId = setInterval(() => {
      if (audioEl.volume < 1) {
        let newVolume = audioEl.volume + audioParticle;
        if (newVolume >= volume) {
          newVolume = volume;
          clearInterval(intervalId);
        } else if (newVolume >= 1) {
          // Trava pra impedir que estoure os nossos timpanos caso alguém altere a configuração
          newVolume = 1;
          clearInterval(intervalId);
        }
        audioEl.volume = newVolume;
      }
    }, fadeInProgressionTime);
  }

}