import React from 'react';

import './styles.scss';

export default class Score extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="score-container">
        <h2>Dentes por segundo:</h2>
        <h4>Total de dentes:</h4>
      </div>
    );
  }

}
