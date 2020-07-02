import React, { useContext } from 'react';
import Tooltip from 'react-tooltip-lite';
import ToothContext from '../../../context/tooth/toothContext';

import Tile from 'commons/Tile';

import './styles.scss';
import Asset from 'commons/Asset';

const Item = ({ item }) => {
    const toothContext = useContext(ToothContext);

    const { score } = toothContext;
    const { name, description, image, price, quantity, pointsToIncrement } = item;

    const toolTipContent = (
        <div className="item-tooltip">
            {description}
            <br/><br/><hr/><br/>
            Cada <b>{name}</b> te dá <span>{pointsToIncrement}</span> limpezinhas por segundo.<br/>
            Total limpezinhas por segundo deste item: <span>{pointsToIncrement * quantity}</span>.
        </div>
    );

    const itemClick = () => {
        if (price <= score.currentTotal) {
            toothContext.buyItem(item);
        }
    }

    function tooExpensive() {
        return score.currentTotal < price;
    }

    return (
        <Tooltip direction="left" content={toolTipContent}>
            <Tile action={itemClick} customClass={"menu-item" + (tooExpensive() ? " too-expensive" : "")}>
                <Asset className="item-image" path={image}></Asset>

                <div className="item-content">
                    <p className="item-title">{name}</p>
                    <span className={"item-price" + (tooExpensive() ? " too-expensive" : "")}>{price.toFixed(0)}</span>
                </div>

                <div className="item-quantity">
                    {quantity}
                </div>
            </Tile>
        </Tooltip>
    );
}

export default Item