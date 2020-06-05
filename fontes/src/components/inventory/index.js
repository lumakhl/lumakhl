import React, { useContext } from 'react';
import ToothContext from '../../context/tooth/toothContext';
import './styles.scss';

import InventoryItem from './InventoryItem';

const Inventory= () => {
    const toothContext = useContext(ToothContext);
    const {items} = toothContext;

    return (
        <div className="middle-view-container">
            <section>
                <h2 className="category-title">Inventário</h2>

                {items.filter(item => item.available && item.quantity > 0).map(item => (
                    <div key={item.id} className="inventory-item-wrapper">
                        <InventoryItem name={item.name} image={item.image} quantity={item.quantity}/>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Inventory;