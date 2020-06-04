import React, { useContext } from 'react';
import ToothContext from  '../../../context/tooth/toothContext';

import './styles.scss';

const Score = () => {

  const toothContext = useContext(ToothContext);

  const { score } = toothContext;
    return (
      <div className="score-container">
        <h2>Dentes por segundo:{score.clickPerSecond}</h2>
        <h4>Total de dentes:{score.currentTotal}</h4>
      </div>
    );
}

export default Score;
