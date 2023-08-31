import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Importa tu componente ProductCard
import { useCart } from './CartContext'; // Importa el contexto CartContext

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { cartItems, setCartItems } = useCart(); // Obtiene los datos del carrito del contexto

  useEffect(() => {
    // Simulando la carga de productos desde una API o fuente de datos
    const fetchProducts = async () => {
      // ... lógica para cargar productos
      setProducts([...productosCargados]);
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="item-list-container">
      <h2>Catálogo de Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={() => addToCart(product)} // Pasa la función addToCart como prop
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;


