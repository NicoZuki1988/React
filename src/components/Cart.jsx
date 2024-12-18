import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import '../styles/Cart.css'
import CheckoutForm from "./CheckoutForm";

const Cart = () => {
    const { cart, getTotal, removeItem } = useContext(cartContext);

    return (
        <div className="cart-container">
            <h2>Carrito de Compras</h2>
            <div className="cart-products">
                {cart.length > 0 ? (
                    cart.map((product, index) => (
                        <div key={product.id} className="cart-product">
                            <div className="cart-product-info">
                                <h4 className="product-name">{product.title}</h4>
                                <p className="product-price">Precio: ${product.price}</p>
                                <p className="product-quantity">Cantidad: {product.qty}</p>
                            </div>
                            <button className="remove-btn" onClick={() => removeItem(index)}>
                                Eliminar
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No hay productos en el carrito</p>
                )}
            </div>
            {cart.length > 0 && (<div>
                <div className="cart-total">
                    <h4>Total: ${getTotal()}</h4>
                </div>
                <CheckoutForm />
            </div>
            )}
        </div>)
};

export default Cart;