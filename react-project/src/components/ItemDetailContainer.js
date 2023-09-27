import React, { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simula la obtención de datos de un producto (reemplaza con tu lógica real)
    // Por ejemplo, podrías obtener los datos de un producto desde una API
    const fetchData = async () => {
      try {
        // Simula una llamada a una API
        const response = await fetch('URL_DE_TU_API_AQUI');
        if (!response.ok) {
          throw new Error('No se pudo obtener el producto');
        }
        // Parsea la respuesta a JSON
        const data = await response.json();
        // Establece el producto en el estado
        setProduct(data);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    // Llama a la función para cargar los datos del producto
    fetchData();
  }, []);

  // Renderiza la vista de detalle del producto si el producto está disponible
  return (
    <div className="item-detail-container">
      {product ? (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <img src={product.imageUrl} alt={product.name} />
        </>
      ) : (
        <p>Cargando producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

  