import React, { useState,  useContext } from 'react';
import ToothContext from  '../../../context/tooth/toothContext';

import Tile from 'commons/Tile';

import './styles.scss';
import Asset from 'commons/Asset';

const increasePriceFactor = 10 / 100;

const Item = ({ item })  => {
    const toothContext = useContext(ToothContext);

    const { name, image, price, quantity } = item;

    console.log(item);
    
    return (
        <Tile action={() => toothContext.buyItem(item)}>
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

export default Item