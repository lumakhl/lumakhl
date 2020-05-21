import React, { useState } from 'react';

import Tile from 'commons/Tile';

import './styles.scss';
import Asset from 'commons/Asset';

const increasePriceFactor = 10 / 100;

export default function Item(props) {

    const { name, image } = props;
    const [price, setPrice] = useState(props.price);
    const [quantity, setQuantity] = useState(props.quantity);

    function buyItem() {
        setQuantity(quantity + 1);
        setPrice(price + (price * increasePriceFactor));
    }

    return (
        <Tile action={() => buyItem()} customClass={"menu-item"}>
            <Asset className="item-image" path={image}></Asset>

            <div className="item-content">
                <p className="item-title">{name}</p>
                <span className="item-price">R$ {price.toFixed(2)}</span>
            </div>

            <div className="item-quantity">
                {quantity}
            </div>
        </Tile>
    );
}