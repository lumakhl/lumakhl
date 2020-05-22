import React from 'react';

import './styles.scss';

import InventoryItem from './InventoryItem';

const items = [
    {
        id: 0,
        name: "Escova",
        image: "toothbrush.png",
        price: 5.99,
        quantity: 10,
        available: true
    },
    {
        id: 1,
        name: "Enxaguante",
        image: "mouthwash.png",
        price: 15.99,
        quantity: 7,
        available: true
    },
    {
        id: 2,
        name: "Escova Elétrica",
        image: "electric-toothbrush.png",
        price: 49.99,
        quantity: 20,
        available: false
    },
    {
        id: 3,
        name: "Pasta de dente",
        image: "toothpaste.png",
        price: 2.49,
        quantity: 201,
        available: false
    }
];

export default function Inventory() {
    return (
        <div className="middle-view-container">
            <section>
                <h2 className="category-title">Inventário</h2>

                {items.filter(item => item.available).map(item => (
                    <div key={item.id} className="inventory-item-wrapper">
                        <InventoryItem name={item.name} image={item.image} quantity={item.quantity}/>
                    </div>
                ))}
            </section>
        </div>
    );
}