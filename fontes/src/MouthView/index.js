import React from 'react';

import './styles.scss';
import Mouth from './Mouth';
import Score from './Score';

export default function MouthView() {
    return (
        <div className="mouth-view-container">
            <Score />
            <Mouth />
        </div>
    );
}