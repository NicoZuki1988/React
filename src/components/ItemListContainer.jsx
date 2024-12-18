import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getProducts } from "../firebase/db";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const  {id} = useParams();

    useEffect(() => {

       getProducts(id).then(products => setItems(products));
    }, [id])
    return (
        <ItemList items={items} />
    );
};

export default ItemListContainer;