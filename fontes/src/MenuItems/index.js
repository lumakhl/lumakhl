import React from 'react';
import Item from "./Item";

import mouthwashImage from '../assets/mouthwash.png';
import './styles.scss';

const items = [
    {
        name: "Escova",
        price: "5,99",
        quantity: "20",
        image: mouthwashImage
    },
    {
        name: "Enxaguante",
        price: "15,99",
        quantity: "7",
        image: mouthwashImage
    },
    {
        name: "Escova Elétrica",
        price: "49,99",
        quantity: "20",
        image: mouthwashImage
    },
    {
        name: "Enxaguante Bucal",
        price: "15,99",
        quantity: "201",
        image: mouthwashImage
    }
];

export default function MenuItems() {
    return (
        <div className="menu-items-container">
            <section>
                <h2>Loja de itens</h2>

                {items.map(item => (
                    <Item name={item.name} price={item.price} quantity={item.quantity} image={item.image} />
                ))}
            </section>
        </div>
    );
}