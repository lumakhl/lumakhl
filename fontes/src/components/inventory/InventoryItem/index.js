import React from 'react';

import Tile from 'commons/Tile';

import './styles.scss';

export default function InventoryItem(props) {

    const { name, image } = props;

    return (
        <Tile>
            <img className="inventory-item-image" src={image} alt={name} />
            <img className="inventory-item-image" src={image} alt={name} />
            <img className="inventory-item-image" src={image} alt={name} />
        </Tile>
    );
}