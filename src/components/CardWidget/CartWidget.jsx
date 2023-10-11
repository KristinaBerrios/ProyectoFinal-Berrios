import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import { useCart } from './CartContext'; // Importa el contexto CartContext

const CartWidget = () => {
  const { cartItems } = useCart(); // Obtiene los elementos del carrito desde el contexto

  // Calcula la cantidad de elementos en el carrito
  const cartItemCount = cartItems.length;

  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-notification">{cartItemCount}</span>
    </div>
  );
};

export default CartWidget;




