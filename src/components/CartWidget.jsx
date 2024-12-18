import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';


const CartWidget = () => {
    const {getQuantity} = useContext(cartContext)
    return (
    <div className="cart-widget"><Link to='/cart'>
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">{ getQuantity()}</span>
        </Link></div>);
};

export default CartWidget;