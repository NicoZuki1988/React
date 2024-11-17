
import CartWidget from '../components/CartWidget'
import {Link } from  'react-router-dom'


const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
        <Link to='/' className="brand-name">TechnoCenter</Link>
        </div>
        <ul className="navbar-categories">
          <li><Link to='/category/laptops'>Computadoras</Link></li>
          <li><Link to='/category/smartphones'>Celulares</Link></li>
          <li><Link to='/category/tablets'>Tablets</Link></li>
         </ul>
        <CartWidget/>
      </nav>

    );
  };
  
  export default NavBar;