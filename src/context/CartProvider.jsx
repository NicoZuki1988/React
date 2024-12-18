import { cartContext } from "./cartContext";
import { useState } from "react";
import Swal from 'sweetalert2';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = item => {
        setCart([...cart, item])
    }
    const getQuantity = () => {
        const quantitys = cart.map(item => item.qty);
        const total = quantitys.reduce((accumulator, current) => accumulator + current, 0);
        return total;
    }

    const getTotal = () => {
        const quantitys = cart.map(item => item.qty * item.price);
        const total = quantitys.reduce((accumulator, current) => accumulator + current, 0).toFixed(2);
        return total;
    }



    const removeItem = (index) => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Este producto será eliminado del carrito.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                const updatedProducts = cart.filter((_, i) => i !== index);
                setCart(updatedProducts);
                Swal.fire('Eliminado', 'El producto ha sido eliminado.', 'success');
            }
        });

    }

    const emptyCart = () => {
        setCart([]);
    }
    return (
        <cartContext.Provider value={{ cart, addToCart, getQuantity, getTotal, removeItem, emptyCart}}>
            {children}
        </cartContext.Provider>)
}

export default CartProvider;