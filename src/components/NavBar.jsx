
import CartWidget from '../components/CartWidget'


const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a href="/" className="brand-name">TechnoCenter</a>
        </div>
        <ul className="navbar-categories">
          <li><a href="#">Computadoras</a></li>
          <li><a href="#">Celulares</a></li>
          <li><a href="#">Televisores</a></li>
          <li><a href="#">Consolas</a></li>
        </ul>
        <CartWidget/>
      </nav>

    );
  };
  
  export default NavBar;