import React, { useContext } from 'react';
import ToothContext from '../../../context/tooth/toothContext';

import Asset from 'commons/Asset';
import { toothbrushPositions } from './toothbrush-movement';

import './styles.scss';

const Mouth = () => {
  const toothContext = useContext(ToothContext);

  const { score } = toothContext;
  console.log(score);
  const [toothbrushLeft, toothbrushTop] = toothbrushPositions[score.currentTotal % toothbrushPositions.length];

  const toothbrushing = () => {
    toothContext.mouthClick(1);
  }

  return (
    <div
      onClick={toothbrushing}
      className="mouth-container">
      <div className="mouth-wrapper">
        <Asset className="mouth" path="mouth.png"></Asset>
      </div>
      <div
        className="toothbrush-controller"
        style={{
          left: `${toothbrushLeft}%`,
          top: `${toothbrushTop}%`,
        }}
      >
        <Asset className="toothbrush" path="toothbrush.png"></Asset>
      </div>
    </div>
  );
}

export default Mouth;