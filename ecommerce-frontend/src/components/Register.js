// src/pages/Register.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify({ username: form.username, password: form.password }));
    alert('Account created successfully!');
    navigate('/login');
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <label>Username</label>
          <input
            name="username"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-primary w-100" type="submit">Register</button>
      </form>

      <div className="mt-3 text-center">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
