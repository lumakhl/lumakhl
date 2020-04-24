import React from 'react';

import Asset from 'commom/Asset';
import './styles.scss';

const toothbrushPosition = [
  [40, 100],
  [40, 150],
  [40, 120],
  [25, 130],
  [25, 110],
  [25, 150],
  [25, 130],
  [25, 170],
  [25, 150],
  [25, 190],
  [20, 180],
  [20, 200],
  [20, 170],
  [20, 230],
  [25, 200],
  [25, 250],
  [25, 220],
  [25, 240],
  [25, 230],
  [25, 270],
  [25, 250],
  [25, 290],
  [25, 280],
  [25, 300],
  [25, 320],
  [40, 310],
  [40, 330],
]

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
    const [toothbrushTop, toothbrushLeft] = toothbrushPosition[this.clickCount % toothbrushPosition.length];
    return { toothbrushTop, toothbrushLeft };
  }

  render() {
    return (
      <div
        onClick={() => this.toothbrushing()}
        className="mouth-container">
        <div className="mouth-wrapper">
          <Asset path="mouth.png"></Asset>
        </div>
        <div
          className="toothbrush-controller"
          style={{ 
            top: this.state.toothbrushTop,
            left: this.state.toothbrushLeft,
          }} 
        >
          <Asset className="toothbrush" path="toothbrush.png"></Asset>
        </div>
      </div>
    );
  }

}