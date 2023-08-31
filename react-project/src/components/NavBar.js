import React from 'react';
import { Link } from 'react-router-dom';
import './navbarStyles.css'; // Importa los estilos personalizados
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">Mi Tienda</Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="navbar-link" to="/category/1">Categoría 1</Link>
          </li>
          {/* Agrega más categorías aquí */}
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;



