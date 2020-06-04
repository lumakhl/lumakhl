import React from 'react';

import './styles.scss';
import Asset from 'commons/Asset';
import Tile from 'commons/Tile';

export default function UnavailableItem({ image, price }) {
    return (
        <Tile action={() => {}}>
            <Asset className="unavailable-item-image" path={image}></Asset>

            <div className="item-content">
                <p className="item-title">?????</p>
                <span className="unavailable-item-price">{price}</span>
            </div>
        </Tile>
    );
}