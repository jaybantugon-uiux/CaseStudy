import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import categories from '../data/categories';

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const cartItemCount = cart.length;
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('loggedIn');

  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    alert('Logged out successfully');
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const matchCategory = location.pathname.match(/^\/category\/([^/]+)/);
  const currentCategory = matchCategory ? decodeURIComponent(matchCategory[1]) : null;

  return (
    <>
      {/* Top Navbar - Black */}
      <nav className="navbar px-4 py-3" style={{ backgroundColor: '#000' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand fw-bold fs-4 text-white" to="/">Tindahan</Link>

          <div className="d-flex align-items-center gap-3">
            {/* Search Bar with Matching Button */}
            <form
              onSubmit={handleSearch}
              className="d-flex align-items-center shadow-sm rounded overflow-hidden"
              style={{ maxWidth: '350px', height: '39px' }}
            >
              <input
                type="text"
                className="form-control border-0 h-100"
                placeholder="Search"
                style={{ boxShadow: 'none' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-light h-100 d-flex align-items-center px-3" type="submit">
                <FaSearch className="me-2" />
                Search
              </button>
            </form>

            {/* Cart Icon */}
            <Link to="/cart" className="position-relative text-white">
              <FaShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {/* Auth Buttons */}
            {isLoggedIn ? (
              <>
                <Link to="/profile" className="btn btn-outline-light">Profile</Link>
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Category Navigation - Clean white background */}
      <nav aria-label="Category navigation" className="bg-white py-2 px-4">
        <ul className="d-flex flex-wrap gap-3 list-unstyled mb-0">
          {categories.map(item => {
            const isActive = currentCategory?.toLowerCase() === item.name.toLowerCase();
            return (
              <li key={item.id}>
                <button
                  className={`btn btn-sm px-3 ${
                    isActive ? 'btn-primary text-white' : 'btn-outline-secondary'
                  }`}
                  style={{
                    borderColor: isActive ? '' : '#ccc',
                    borderRadius: '20px'
                  }}
                  onClick={() => navigate(`/category/${encodeURIComponent(item.name)}`)}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
