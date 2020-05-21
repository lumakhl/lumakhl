import React from 'react';

import './styles.scss';
import Mouth from './mouth';
import Score from './score';

export default function MouthView() {
    return (
        <div className="mouth-view-container">
            <Score />
            <Mouth />
        </div>
    );
}