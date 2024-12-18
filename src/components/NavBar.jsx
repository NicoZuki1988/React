
import CartWidget from '../components/CartWidget'
import {Link, NavLink } from  'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi';
import { useContext } from "react";
import { cartContext } from "../context/cartContext";
import Swal from 'sweetalert2';


const NavBar = () => {

  const {cart, emptyCart} = useContext(cartContext);

  const removeCart = () => {
    if (cart.length>0)
    Swal.fire({
      title: '¿Estás seguro?',
      text: "El carrito será vaciado",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
  }).then((result) => {
      if (result.isConfirmed) {
         emptyCart();
         Swal.fire('Eliminado', 'El carrito ha sido eliminado.', 'success');
      }
  });
  }

    
    return (
      <nav className="navbar">
        <div className="navbar-brand">
        <Link to='/' className="brand-name">TechnoCenter</Link>
        </div>
        <ul className="navbar-categories">
          <li><NavLink to='/category/laptops' className={({ isActive }) =>
          isActive ? "active" : ""
        } >Computadoras</NavLink></li>
          <li><NavLink to='/category/smartphones' className={({ isActive }) =>
          isActive ? "active" : ""
        }>Celulares</NavLink></li>
          <li><NavLink to='/category/tablets' className={({ isActive }) =>
          isActive ? "active" : ""
        }>Tablets</NavLink></li>
         </ul>
        <CartWidget/>
        <FiShoppingCart
          className="clear-cart-icon"
          onClick={removeCart}
          title="Vaciar Carrito"
        />
      </nav>

    );
  };
  
  export default NavBar;