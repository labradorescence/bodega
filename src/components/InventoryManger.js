import React, { useEffect, useState} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"
const url = "http://localhost:8001/inventory"

// /inventory
// /invetory/:id

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

    function removeItemfromStateArray(itemToRemove, stateArray, setStateFunction){
        const reorderItemIndex = stateArray.findIndex(item => item.id === itemToRemove.id)

        console.log(reorderItemIndex)

        if( reorderItemIndex >= 0){
            const arrayCopy = [...stateArray]
            arrayCopy.splice(reorderItemIndex, 1);
            console.log(arrayCopy)

            setStateFunction(arrayCopy)
        } else {
            console.log("couldn't remove item")
        }
    }

    function onDelete(item){
        fetch(`${url}/${item.id}`,{
            method: "DELETE"
        })

        removeItemfromStateArray(item, reorderInventory, setReorderInventory)
        removeItemfromStateArray(item, inventory, setInventory)
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