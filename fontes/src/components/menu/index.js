import React from 'react';
import Item from "./Item";
import UnavailableItem from './UnavailableItem';

import './styles.scss';

const items = [
    {
        id: 0,
        name: "Escova",
        image: "toothbrush.png",
        price: 5.99,
        quantity: 20,
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

export default function MenuItems() {
    return (
        <div className="menu-items-container">
            <section>
                <h2 className="category-title">Loja de itens</h2>
                <div className="menu-items">
                    {items.map(item => (
                        item.available ?
                            <Item key={item.id} name={item.name} image={item.image}  
                                price={item.price} quantity={item.quantity}/>
                            :
                            <UnavailableItem key={item.id} image={item.image} price={item.price}/>
                    ))}
                </div>
            </section>
        </div>
    );
}