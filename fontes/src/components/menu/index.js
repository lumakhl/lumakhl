import React, { useContext } from 'react';
import Item from "./Item";
import UnavailableItem from './UnavailableItem';

import ToothContext from '../../context/tooth/toothContext';

import './styles.scss';


export default function MenuItems() {
    const toothContext = useContext(ToothContext);

    const { items } = toothContext;

    return (
        <div className="menu-items-container">
            <section>
                <h2 className="category-title">Loja de itens</h2>
                <div className="menu-items">
                    {items.map(item => (
                        item.visible ? (
                            item.available ?
                                <Item key={item.id} name={item.name} image={item.image}
                                    price={item.price} quantity={item.quantity} />
                                :
                                <UnavailableItem key={item.id} image={item.image} price={item.price} />) :
                            undefined
                    ))}
                </div>
            </section>
        </div>
    );
}