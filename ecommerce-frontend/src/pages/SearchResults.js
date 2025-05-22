import React from 'react';
import { useLocation } from 'react-router-dom';
import mockProducts from '../mockData';
import ProductGrid from '../components/ProductGrid';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const query = useQuery();
  const searchTerm = query.get('q')?.toLowerCase() || '';

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container mt-4">
      <h3>Search Results for "{searchTerm}"</h3>
      {filteredProducts.length === 0 ? (
        <p>No matching products found.</p>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </div>
  );
};

export default SearchResults;
