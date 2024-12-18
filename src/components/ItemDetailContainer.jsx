import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../firebase/db";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState();
    const  {id} = useParams();

    useEffect(() => { 
        getItem(id, setItem);
    }, [id])
    return (
        <ItemDetail item={item} />
    );
};

export default ItemDetailContainer;