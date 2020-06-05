import React from 'react';

import './styles.scss';

export default class StartScreen extends React.Component {

  render() {
    return (
      <div className="start-screen-container">
        <button 
          className="start-button" 
          onClick={() => this.props.onStart()}>
            Iniciar
          </button>
      </div>
    );
  }

}
