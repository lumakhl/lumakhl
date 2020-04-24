import React from 'react';

import './styles.scss';

export default function Asset(props) {
  return (
    <img 
      draggable="false"
      className={`asset ${props.className}`}
      src={require(`assets/${props.path}`)}
      alt={props.name}>
    </img>
  );
}