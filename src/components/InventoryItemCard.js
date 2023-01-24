import React from 'react'

function InventoryItemCard({item, onCardClick, onDelete}) {

    return(
        <div className="card" onClick={() => onCardClick(item)}>
            <img src={item.image} alt={item.name}></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={(e) => {
                e.stopPropagation()
                onDelete(item)
            }}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;