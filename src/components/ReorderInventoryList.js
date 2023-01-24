import React from 'react'
import InventoryItemCard from "./InventoryItemCard"

function ReorderInventoryList( {reorderInventory, handleRemoveItemFromReorder, onDelete }) {
   // console.log(reorderInventory)

    const reorderItem = reorderInventory.map((oneItem) => (
        <InventoryItemCard 
                key = {oneItem.id}
                item = {oneItem}
                onCardClick = {handleRemoveItemFromReorder }
                onDelete = {onDelete}
        />
    ))
    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {reorderItem}
            </div>
        </div>
    );
}

export default ReorderInventoryList;