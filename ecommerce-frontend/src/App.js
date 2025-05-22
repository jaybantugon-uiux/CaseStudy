// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import Checkout from './pages/Checkout';
import Login from './components/Login';       
import Register from './components/Register'; 
import { CartProvider } from './context/CartContext';
import Profile from './pages/Profile';
import { AuthProvider } from './context/AuthContext';
import CategoryPage from './data/CategoryPage';
import SearchResults from './pages/SearchResults';
import ResetPassword from './components/ResetPassword';
import AdminProfile from './pages/AdminProfile';


function App() {
  return (
    <CartProvider>
      <Router>
         <AuthProvider>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/product-grid" element={<ProductGrid />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />        
            <Route path="/register" element={<Register />} />  
            <Route path="/profile" element={<Profile />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/reset-password" element={<ResetPassword />} /> 
            <Route path="/admin" element={<AdminProfile />} />
          </Routes>
        </div>
        </AuthProvider>
      </Router>
    </CartProvider>
  );
}

export default App;
