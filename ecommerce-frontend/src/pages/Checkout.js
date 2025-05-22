import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [submitted, setSubmitted] = useState(false);
  const [editInfo, setEditInfo] = useState(false);
  const [profile, setProfile] = useState(() => {
    // Load saved profile from localStorage or default empty
    return JSON.parse(localStorage.getItem('userProfile')) || {
      fullName: '',
      email: '',
      address: '',
      password: '',
    };
  });

  const [formData, setFormData] = useState(profile);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  // Handle changes in form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Save profile info to localStorage and update profile state
  const handleSaveProfile = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(formData));
    setProfile(formData);
    setEditInfo(false);
  };

  // Handle placing order
  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart(); // clear cart after successful order
  };

  if (submitted) {
    return (
      <div className="alert alert-success">
        <h4>Thank you for your order!</h4>
        <p>Your order has been placed successfully.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>

      {!editInfo ? (
        <div>
          <h5>Your Information</h5>
          <p><strong>Full Name:</strong> {profile.fullName}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Shipping Address:</strong> {profile.address}</p>
          <button
            className="btn btn-secondary mb-4"
            onClick={() => setEditInfo(true)}
          >
            Edit Info
          </button>

          <h4>Total: ${total.toFixed(2)}</h4>
          <button
            className="btn btn-primary"
            onClick={handlePlaceOrder}
            disabled={cart.length === 0}
          >
            Place Order
          </button>
          {cart.length === 0 && <p className="text-danger mt-2">Your cart is empty.</p>}
        </div>
      ) : (
        <form onSubmit={handleSaveProfile}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="form-control"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Shipping Address</label>
            <textarea
              name="address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary me-2">Save Info</button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setFormData(profile); // revert changes
              setEditInfo(false);
            }}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
}

export default Checkout;
