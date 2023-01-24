import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function CurrentInventoryList( {inventory, onAddItemToReorder, onDelete} ) {

    const inventoryItem = inventory.map((item) => (
        <InventoryItemCard 
                key = {item.id}
                item = {item}
                onCardClick = {onAddItemToReorder}
                onDelete = {onDelete}
                />
    ))

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventoryItem}
            </div>
        </div>
    );
}

export default CurrentInventoryList;