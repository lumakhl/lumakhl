import React from 'react';

import './styles.scss';
import Mouth from './mouth';
import Score from './score';
import MouthBackground from './mouthBackground';

export default function MouthView() {
    return (
        <div className="mouth-view-container">
            <MouthBackground />
            <Score />
            <Mouth />
        </div>
    );
}