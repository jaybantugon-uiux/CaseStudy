import React from 'react';
import mockProducts from '../mockData';
import ProductCard from './ProductCard';

function ProductList({ category }) {
  const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  };

  // 🟡 Filter by category if provided
  const filteredProducts = category
    ? mockProducts.filter(
        product => product.category.toLowerCase() === category.toLowerCase()
      )
    : mockProducts;

  const productChunks = chunkArray(filteredProducts, 3);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        {category ? `${category} Products` : 'All Products'}
      </h2>
      {productChunks.length > 0 ? (
        productChunks.map((chunk, idx) => (
          <div className="row" key={idx}>
            {chunk.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ))
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
}

export default ProductList;
