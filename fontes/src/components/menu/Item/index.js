import React, { useContext } from 'react';
import ToothContext from  '../../../context/tooth/toothContext';

import Tile from 'commons/Tile';

import './styles.scss';
import Asset from 'commons/Asset';

const Item = ({ item })  => {
    const toothContext = useContext(ToothContext);

    const { name, image, price, quantity } = item;

    return (
        <Tile action={() => toothContext.buyItem(item)} customClass={"menu-item"}>
            <Asset className="item-image" path={image}></Asset>

            <div className="item-content">
                <p className="item-title">{name}</p>
                <span className="item-price">{price.toFixed(2)}</span>
            </div>

            <div className="item-quantity">
                {quantity}
            </div>
        </Tile>
    );
}

export default Item