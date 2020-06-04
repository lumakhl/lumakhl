import React, { useContext } from 'react';
import ToothContext from '../../../context/tooth/toothContext';

import Tile from 'commons/Tile';

import './styles.scss';
import Asset from 'commons/Asset';

const Item = ({ item }) => {
    const toothContext = useContext(ToothContext);

    const { score } = toothContext;
    const { name, image, price, quantity } = item;

    const itemClick = () => {
        if (price <= score.currentTotal) {
            toothContext.buyItem(item)
        }
    }

    return (
        <Tile action={itemClick} customClass={"menu-item"}>
            <Asset className="item-image" path={image}></Asset>

            <div className="item-content">
                <p className="item-title">{name}</p>
                <span className="item-price">{price.toFixed(0)}</span>
            </div>

            <div className="item-quantity">
                {quantity}
            </div>
        </Tile>
    );
}

export default Item