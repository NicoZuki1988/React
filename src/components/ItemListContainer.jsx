import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const  {id} = useParams();

    useEffect(() => { id ? 
        fetch(`https://dummyjson.com/products/category/${id}`)
        .then(res => res.json())
        .then(res => setItems(res.products)) :
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(res => setItems(res.products))
    }, [id])
    return (
        <ItemList items={items} />
    );
};

export default ItemListContainer;