import React, { useContext } from 'react';
import ToothContext from  '../../../context/tooth/toothContext';

import './styles.scss';

const Score = () => {

  const toothContext = useContext(ToothContext);

  const { score } = toothContext;
    return (
      <div className="score-container">
        <h2>{score.currentTotal} limpezinhas</h2>
        <h4>limpezinhas por segundo - {score.clickPerSecond}</h4>
      </div>
    );
}

export default Score;
