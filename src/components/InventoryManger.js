import React, { useEffect, useState} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"
const url = "http://localhost:8001/inventory"


function InventoryManager() {

    const [ inventory, setInventory ] = useState([])
    const [ reorderInventory, setReorderInventory ] = useState([])

    useEffect(()=> {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setInventory(data))
    }, [])

    const onAddItemToReorder = (item) => {
        setReorderInventory([...reorderInventory, item])
    }
     
    const handleRemoveItemFromReorder = (item) => {
      setReorderInventory(reorderInventory.filter((oneItem) => oneItem.id !== item.id))
    }


    function onDelete(item){
        fetch(`${url}/${item.id}`,{
            method: "DELETE"
        })
        setReorderInventory(reorderInventory.filter((oneItem) => oneItem.id !== item.id))
        setInventory(inventory.filter((oneItem) => oneItem.id !== item.id))
    }

    

    return(
        <div className="container">
            <CurrentInventoryList
                inventory = {inventory} 
                onAddItemToReorder = {onAddItemToReorder}
                onDelete = {onDelete}/>
            <ReorderInventoryList 
                reorderInventory = {reorderInventory}
                handleRemoveItemFromReorder = {handleRemoveItemFromReorder}
                onDelete = {onDelete}/>
        </div>
    );
}

export default InventoryManager;