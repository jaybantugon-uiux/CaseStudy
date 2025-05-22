import React from 'react';
import { useParams } from 'react-router-dom';
import mockProducts from '../mockData';
import categories from '../data/categories';
import ProductGrid from '../components/ProductGrid';

const CategoryPage = () => {
  const { categoryName } = useParams();

  // Find category object (case insensitive match)
  const category = categories.find(
    (c) => c.name.toLowerCase() === categoryName.toLowerCase()
  );

  if (!category) {
    return <p>Category not found.</p>;
  }

  // Filter products that belong to this category
  const filteredProducts = mockProducts.filter(
    (product) => product.categoryId === category.id
  );

  return (
    <div>
      <h2 className="mb-4 text-center fw-bold fs-3">{category.name}</h2>
      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <ProductGrid products={filteredProducts} />
      )}
    </div>
  );
};

export default CategoryPage;
