import '../ItemCount.css';
import { useState } from "react";

const ItemCount = () => {
    const [count, setCount] = useState(0);

    // Incrementa el contador
    const increment = () => setCount(count + 1);

    // Decrementa el contador, solo si es mayor a 0
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="item-count">
            <button className="count-btn decrement" onClick={decrement}>-</button>
            <input type="text" value={count} readOnly className="count-input" />
            <button className="count-btn increment" onClick={increment}>+</button>
        </div>
    );
};

export default ItemCount;
