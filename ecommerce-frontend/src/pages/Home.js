import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';

const Home = () => {
  const { categoryName } = useParams(); // get category from URL

  return (
    <div>
      <div className="text-center py-5 bg-light">
        <h1 className="mb-3">Welcome to Tindahan</h1>
        <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
          Discover great deals on electronics, fashion, home essentials, and more. Browse our top products below!
        </p>
      </div>

      {/* Product section */}
      <div className="container mt-4">
        <ProductList category={categoryName} />
      </div>
    </div>
  );
};

export default Home;
