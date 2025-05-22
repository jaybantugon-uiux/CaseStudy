import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
      <div className="card w-100 h-100">
        <img
          src={product.image}
          className="card-img-top img-fluid"
          alt={product.name}
          style={{ maxHeight: '250px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text"><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p className="card-text"><strong>Rating:</strong> {product.rating} ⭐</p>
          <p className="card-text"><strong>Stock:</strong> {product.stock}</p>
          <div className="mt-auto d-flex justify-content-between">
            <Link to={`/product/${product.id}`} className="btn btn-primary">
              View Details
            </Link>
            <button onClick={handleAddToCart} className="btn btn-success">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
