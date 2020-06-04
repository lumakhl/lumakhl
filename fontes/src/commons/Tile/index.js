import React from 'react';

import './styles.scss';

export default class Tile extends React.Component {

  render() {
    return (
      <div
        className={`tile-container ${this.props.action ? 'clickable' : ''} ${this.props.customClass ? this.props.customClass : ''}`}
        onClick={this.props.action}
      >
        {this.props.children}
      </div>
    );
  }

}