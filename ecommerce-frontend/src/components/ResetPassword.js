import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [form, setForm] = useState({ username: '', newPassword: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser?.username === form.username) {
      const updatedUser = { ...savedUser, password: form.newPassword };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      alert('Password reset successfully!');
      navigate('/login');
    } else {
      alert('Username not found.');
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
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
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn btn-warning w-100">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
