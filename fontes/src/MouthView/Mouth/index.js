import React from 'react';

import Asset from 'commom/Asset';
import './styles.scss';

import { toothbrushPositions } from './toothbrush-movement';

export default class Mouth extends React.Component {

  constructor(props) {
    super(props);
    this.clickCount = 0;
    this.state = {
      ...this.getToothbrushPosition()
    }
  }

  toothbrushing() {
    this.clickCount++;
    this.setState({ ...this.getToothbrushPosition() });
  }

  getToothbrushPosition() {
    const [ toothbrushLeft, toothbrushTop ] = toothbrushPositions[this.clickCount % toothbrushPositions.length];
    return { toothbrushLeft, toothbrushTop };
  }

  render() {
    return (
      <div
        onClick={() => this.toothbrushing()}
        className="mouth-container">
        <div className="mouth-wrapper">
          <Asset className="mouth" path="mouth.png"></Asset>
        </div>
        <div
          className="toothbrush-controller"
          style={{ 
            left: `${this.state.toothbrushLeft}%`,
            top: `${this.state.toothbrushTop}%`,
          }} 
        >
          <Asset className="toothbrush" path="toothbrush.png"></Asset>
        </div>
      </div>
    );
  }

}