import React from 'react';

import './styles.scss';

import mouthwashImage from '../assets/mouthwash.png';
import toothbrushImage from '../assets/toothbrush.png';
import electricToothbrushImage from '../assets/electric-toothbrush.png';
import toothpasteImage from '../assets/toothpaste.png';
import InventoryItem from './InventoryItem';

const items = [
    {
        id: 0,
        name: "Escova",
        image: toothbrushImage
    },
    {
        id: 1,
        name: "Enxaguante",
        image: mouthwashImage
    },
    {
        id: 2,
        name: "Escova Elétrica",
        image: electricToothbrushImage
    },
    {
        id: 3,
        name: "Pasta de dente",
        image: toothpasteImage
    }
];

export default function Inventory() {
    return (
        <div className="middle-view-container">
            <section>
                <h2>Inventário</h2>

                {items.map(item => (
                    <InventoryItem key={item.id} name={item.name} image={item.image} />
                ))}
            </section>
        </div>
    );
}