import React from 'react';

import './styles.scss';

export default function InventoryItem(props) {

    const { name, image } = props;

    return (
        <div className="inventory-item-container">
            <img className="inventory-item-image" src={image} alt={name} />
            <img className="inventory-item-image" src={image} alt={name} />
            <img className="inventory-item-image" src={image} alt={name} />
        </div>
    );
}