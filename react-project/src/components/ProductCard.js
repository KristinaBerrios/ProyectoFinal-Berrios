import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

