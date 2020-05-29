import React from 'react';

import Asset from 'commons/Asset';
import Tile from 'commons/Tile';

import './styles.scss';

export default function InventoryItem({ image, quantity }) {

    let items = [];

    for(let i = 0; i < quantity; i++) {
        items.push(<Asset key={i} className={"inventory-item-image animation-"+((i%4)+1)} path={image}></Asset>);
    }

    return (
        <Tile customClass="inventory-item-container">
            { items }
        </Tile>
    );
}