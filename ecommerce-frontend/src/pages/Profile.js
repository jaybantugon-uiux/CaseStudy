import React, { useState } from 'react';

const Profile = () => {
  // Load saved profile and login credentials from localStorage
  const savedProfile = JSON.parse(localStorage.getItem('userProfile')) || {
    fullName: '',
    email: '',
    address: '',
    password: '',   // Add password field
  };

  // Also load login credentials to validate / update login info
  const savedLogin = JSON.parse(localStorage.getItem('loginCredentials')) || {
    email: '',
    password: '',
  };

  const [profile, setProfile] = useState(savedProfile);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Update local state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  // Save profile and update login credentials on form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: you can validate here that password is strong enough

    // Update login credentials with new email and password
    localStorage.setItem('loginCredentials', JSON.stringify({
      email: profile.email,
      password: profile.password,
    }));

    // Save profile data
    localStorage.setItem('userProfile', JSON.stringify(profile));

    setMessage('Profile and login credentials updated successfully!');
    setError('');
  };

  return (
    <div className="container mt-4">
      <h2>Your Profile</h2>
      {message && <div className="alert alert-success">{message}</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            value={profile.fullName}
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
            value={profile.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={profile.password}
            onChange={handleChange}
            required
            minLength={6}  // example validation: minimum length
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Shipping Address</label>
          <textarea
            name="address"
            className="form-control"
            value={profile.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
