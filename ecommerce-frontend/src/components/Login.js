// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser?.username === form.username && savedUser?.password === form.password) {
      localStorage.setItem('loggedIn', 'true');
      alert('Login successful!');
      navigate('/');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Username</label>
          <input name="username" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} required />
        </div>

        <div className="mb-3 text-end">
          <Link to="/reset-password" className="text-decoration-none">Forgot Password?</Link>
        </div>

        <button className="btn btn-primary w-100" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
