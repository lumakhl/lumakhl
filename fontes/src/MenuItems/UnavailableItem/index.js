import React from 'react';

import './styles.scss';
import Asset from 'commom/Asset';
import Tile from 'commom/Tile';

export default function UnavailableItem({image, price}) {
    return (
        <Tile action={() => {}}>
            <Asset className="item-image" path={"dark-" + image}></Asset>

            <div className="item-content">
                <p className="item-title">?????</p>
                <span className="unavailable-item-price">R$ {price}</span>
            </div>
        </Tile>
    );
}