import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-notification">5</span>
    </div>
  );
};

export default CartWidget;



