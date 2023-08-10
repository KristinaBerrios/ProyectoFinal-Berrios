import React from 'react';
import CartWidget from './CartWidget'; // Importa el componente CartWidget
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Mi Tienda</a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Categoría 1</a>
          </li>
          {/* Agrega más categorías aquí */}
        </ul>
        <CartWidget /> {/* Agrega el componente CartWidget aquí */}
      </div>
    </nav>
  );
};

export default Navbar;
