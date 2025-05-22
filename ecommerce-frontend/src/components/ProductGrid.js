import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
