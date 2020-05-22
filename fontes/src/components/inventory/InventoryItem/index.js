import React from 'react';

import Asset from 'commons/Asset';
import Tile from 'commons/Tile';

import './styles.scss';

export default function InventoryItem({ image, quantity }) {

    let items = [];

    const limite = 10;  // limite temporario para a qtd de itens nao ultrapassar o tamanho da div (:
    for(let i = 0; i < quantity && i < limite; i++) {
        items.push(<Asset key={i} className="inventory-item-image" path={image}></Asset>);
    }

    console.log(items.length);

    return (
        <Tile>
            { items }
        </Tile>
    );
}