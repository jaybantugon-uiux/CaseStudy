import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import mockProducts from '../mockData'; // import your mock data

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  
  // Find the product from mockData using the id from the URL params
  const product = mockProducts.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.image} alt={product.name} className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <ul>
          {product.detailedDescription.map((point, index) => (
        <li key={index}>{point}</li>
         ))}
        </ul>
        <h4>${product.price.toFixed(2)}</h4>
        <button className="btn btn-primary me-2" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <Link to="/" className="btn btn-secondary">
          Back to Products
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
