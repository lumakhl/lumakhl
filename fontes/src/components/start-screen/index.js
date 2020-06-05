import React from 'react';

import './styles.scss';

export default class StartScreen extends React.Component {

  render() {
    return (
      <div className="start-screen-container">
        <button 
          className="start-button" 
          onClick={() => this.props.onStart()}>
            <div className="content-wrapper">
              <span className="game-title">Tooth Clicker</span>
              <span className="click-to-start">Clique para iniciar</span>
            </div>
          </button>
      </div>
    );
  }

}
