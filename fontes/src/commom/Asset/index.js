import React from 'react';

import './styles.scss';

export default function Asset(props) {
  return (
    <img 
      src={require(`resources/assets/${props.path}`)}
      alt={props.name}>
    </img>
  );
}