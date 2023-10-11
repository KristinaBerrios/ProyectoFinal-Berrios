import React from 'react';
import { Link } from 'react-router-dom';
import './navbarStyles.css'; // Importa los estilos personalizados
import 'bootstrap/dist/css/bootstrap.min.css';
import { useCart } from '../../CartContext';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
  const { cartItems } = useCart(); // Obtiene los elementos del carrito desde el contexto

  // Calcula la cantidad de elementos en el carrito
  const cartItemCount = cartItems.length;

  return (
    <nav className="navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Mi Tienda
        </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="navbar-link" to="/category/1">
              Categoría 1
            </Link>
          </li>
          {/* Agrega más categorías aquí */}
        </ul>
        <CartWidget cartItemCount={cartItemCount} /> {/* Pasa la cantidad de elementos al CartWidget */}
      </div>
    </nav>
  );
};

export default Navbar;




