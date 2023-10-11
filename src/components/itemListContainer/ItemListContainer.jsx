import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useCart } from './CartContext';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
  const { cartItems, setCartItems } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showProductDetail = (product) => {
    setSelectedProduct(product);
  };

  const hideProductDetail = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, 'products');

    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(productsCollection);
        const productsData = [];
        querySnapshot.forEach((doc) => {
          productsData.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productsData);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="item-list-container">
      <h2>Catálogo de Productos</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} showProductDetail={() => showProductDetail(product)} />
          </div>
        ))}
      </div>
      {selectedProduct && (
        <ItemDetailContainer product={selectedProduct} hideProductDetail={hideProductDetail} />
      )}
    </div>
  );
};

export default ItemListContainer;


