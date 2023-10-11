import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { CartProvider, useCart } from './CartContext'; // Importa el contexto CartContext

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams(); // Obtén el ID del producto desde la URL
  const { cartItems, addToCart } = useCart(); // Obtiene la función addToCart desde el contexto

  useEffect(() => {
    const loadProduct = async () => {
      const db = getFirestore();
      const productRef = doc(db, 'products', id); // 'products' es el nombre de tu colección

      try {
        const productDoc = await getDoc(productRef);
        if (productDoc.exists()) {
          // El producto existe en la base de datos de Firestore
          const productData = productDoc.data();
          setProduct(productData);
        } else {
          console.error('El producto no existe');
        }
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    loadProduct();
  }, [id]);

  // Función para agregar el producto al carrito
  const handleAddToCart = () => {
    addToCart(product);
  };

  // Renderiza la vista de detalle del producto si el producto está disponible
  return (
    <div className="item-detail-container">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <img src={product.imageUrl} alt={product.name} />
          <button onClick={handleAddToCart}>Agregar al carrito</button>
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

