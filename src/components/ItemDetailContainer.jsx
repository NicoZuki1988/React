import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const  {id} = useParams();

    useEffect(() => { 
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(res => setItem(res))
    }, [id])
    return (
        <ItemDetail item={item} />
    );
};

export default ItemDetailContainer;