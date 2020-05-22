import React from 'react';

import Tile from 'commons/Tile';

import './styles.scss';

export default function InventoryItem(props) {

    const { name, image } = props;

    return (
        <Tile>
            <img className="inventory-item-image animation-1" src={image} alt={name} />
            <img className="inventory-item-image animation-2" src={image} alt={name} />
            <img className="inventory-item-image animation-3" src={image} alt={name} />
            <img className="inventory-item-image animation-4" src={image} alt={name} />
        </Tile>
    );
}