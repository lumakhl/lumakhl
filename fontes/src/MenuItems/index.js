import React from 'react';
import Item from "./Item";

import mouthwashImage from '../assets/mouthwash.png';
import toothbrushImage from '../assets/toothbrush.png';
import electricToothbrushImage from '../assets/electric-toothbrush.png';
import toothpasteImage from '../assets/toothpaste.png';

import './styles.scss';

const items = [
    {
        id: 0,
        name: "Escova",
        image: toothbrushImage,
        price: 5.99,
        quantity: 20
    },
    {
        id: 1,
        name: "Enxaguante",
        image: mouthwashImage,
        price: 15.99,
        quantity: 7
    },
    {
        id: 2,
        name: "Escova Elétrica",
        image: electricToothbrushImage,
        price: 49.99,
        quantity: 20
    },
    {
        id: 3,
        name: "Pasta de dente",
        image: toothpasteImage,
        price: 2.49,
        quantity: 201
    }
];

export default function MenuItems() {
    return (
        <div className="menu-items-container">
            <section>
                <h2>Loja de itens</h2>

                {items.map(item => (
                    <Item key={item.id} name={item.name} image={item.image}  
                        price={item.price} quantity={item.quantity} />
                ))}
            </section>
        </div>
    );
}