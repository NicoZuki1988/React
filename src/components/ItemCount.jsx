import '../styles/ItemCount.css';
import { useState } from "react";
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';

const ItemCount = ({item}) => {
    const [count, setCount] = useState(0);
    const {addToCart} = useContext(cartContext);
  
    const increment = () => setCount(count + 1);
  
    const decrement = () => {
      if (count > 0) {
        setCount(count - 1);
      }
    };

    const handleAddToCart = () => {
      if (count>0)
        addToCart({... item, qty : count});
    }
  
    return (
      <div className="item-count">
        <div className="counter-controls">
          <button className="count-btn decrement" onClick={decrement}>-</button>
          <input type="text" value={count} readOnly className="count-input" />
          <button className="count-btn increment" onClick={increment}>+</button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    );
  };
  
  export default ItemCount;
