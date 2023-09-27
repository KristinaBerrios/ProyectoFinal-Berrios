import React, { useState } from 'react';
import ProductCard from './ProductCard'; // Importa tu componente ProductCard
import { useCart } from './CartContext'; // Importa el contexto CartContext

const ItemListContainer = () => {
  const { cartItems, setCartItems } = useCart();

  // Define tus productos aquí
  const products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 19.99,
      image: 'url_de_la_imagen_1.jpg', // Reemplaza con la URL de la imagen real
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 24.99,
      image: 'url_de_la_imagen_2.jpg', // Reemplaza con la URL de la imagen real
    },
    {
      id: 3,
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 14.99,
      image: 'url_de_la_imagen_3.jpg', // Reemplaza con la URL de la imagen real
    },
    {
      id: 4,
      name: 'Producto 4',
      description: 'Descripción del producto 4',
      price: 29.99,
      image: 'url_de_la_imagen_4.jpg', // Reemplaza con la URL de la imagen real
    },
    {
      id: 5,
      name: 'Producto 5',
      description: 'Descripción del producto 5',
      price: 9.99,
      image: 'url_de_la_imagen_5.jpg', // Reemplaza con la URL de la imagen real
    },
    {
      id: 6,
      name: 'Producto 6',
      description: 'Descripción del producto 6',
      price: 15.99,
      image: 'url_de_la_imagen_6.jpg', // Reemplaza con la URL de la imagen real
    },
    {
      id: 7,
      name: 'Producto 7',
      description: 'Descripción del producto 7',
      price: 34.99,
      image: 'url_de_la_imagen_7.jpg', // Reemplaza con la URL de la imagen real
    },
    {
      id: 8,
      name: 'Producto 8',
      description: 'Descripción del producto 8',
      price: 12.99,
      image: 'url_de_la_imagen_8.jpg', // Reemplaza con la URL de la imagen real
    },
    {
      id: 9,
      name: 'Producto 9',
      description: 'Descripción del producto 9',
      price: 21.99,
      image: 'url_de_la_imagen_9.jpg', // Reemplaza con la URL de la imagen real
    },
    {
      id: 10,
      name: 'Producto 10',
      description: 'Descripción del producto 10',
      price: 39.99,
      image: 'url_de_la_imagen_10.jpg', // Reemplaza con la URL de la imagen real
    },
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Agrega el estado para mostrar el detalle del producto seleccionado
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Función para mostrar el detalle del producto
  const showProductDetail = (product) => {
    setSelectedProduct(product);
  };

  // Función para ocultar el detalle del producto
  const hideProductDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="item-list-container">
      <h2>Catálogo de Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              addToCart={() => addToCart(product)}
              showProductDetail={() => showProductDetail(product)} // Agrega esta línea
            />
          </div>
        ))}
      </div>
      {selectedProduct && ( // Renderiza ItemDetailContainer solo si hay un producto seleccionado
        <ItemDetailContainer
          product={selectedProduct}
          hideProductDetail={hideProductDetail} // Agrega esta línea para cerrar el detalle
        />
      )}
    </div>
  );
};

export default ItemListContainer;


