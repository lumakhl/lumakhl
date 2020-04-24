import React from 'react';

import './styles.scss';

export default function Item({ name, price, image, quantity }) {
    return (
        <div className="item-container">
            <img className="item-image" src={image} />

            <div className="item-content" >
                <p className="item-title">{name}</p>
                <span className="item-price">R$ {price}</span>
            </div>

            <div className="item-quantity">
                {quantity}
            </div>
        </div>
    );
}