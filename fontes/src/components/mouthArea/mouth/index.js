import React, { useContext, useEffect } from 'react';
import ToothContext from '../../../context/tooth/toothContext';

import Asset from 'commons/Asset';
import { toothbrushPositions } from 'context/tooth/toothbrush-movement';

import './styles.scss';

import DirtiesController from 'context/tooth/dirtiesController';
import { DirtEvents } from 'context/tooth/dirtEvents';
import { DirtTypes } from 'context/tooth/dirtTypes';

const dirtiesController = new DirtiesController();

const Mouth = () => {
  const toothContext = useContext(ToothContext);

  useEffect(() => {
    toothContext.getState();
    dirtiesController.on(DirtEvents.ADDED_DIRT, () => {
      toothContext.setDirties(dirtiesController.getDirties());
    });
    dirtiesController.on(DirtEvents.REMOVED_DIRT, () => {
      toothContext.setDirties(dirtiesController.getDirties());
    })
    dirtiesController.start();
    setInterval(() => {toothContext.saveState()}, 30000);
  }, []);

  const { score, dirties } = toothContext;
  const [toothbrushLeft, toothbrushTop] = toothbrushPositions[score.totalClicks % toothbrushPositions.length];

  const toothbrushing = () => {
    toothContext.mouthClick(1);
    dirtiesController.removeDirt([[toothbrushLeft, toothbrushTop]]);
  }

  return (
    <div
      onClick={toothbrushing}
      className="mouth-container">
      <div className="mouth-wrapper">
        <Asset className="mouth" path="mouth.png"></Asset>
      </div>
      
      {dirties.map(dirt => {
          const [[id_dirt_x, id_dirt_y], [dirt_x, dirt_y], type, props] = dirt;
          const { style } = props;
          return (
            <div className="dirty-wrapper"
              key={`${id_dirt_x}_${id_dirt_y}`}
              style={{
                left:  `${dirt_x}%`,
                top: `${dirt_y}%`
              }}>
              <Asset
                className={`dirt-${style}`}
                path={type === DirtTypes.TOOTH ? 'tooth_dirt.png' : 'mouth_dirt.png'}
              ></Asset>
            </div>
          )
      })}
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