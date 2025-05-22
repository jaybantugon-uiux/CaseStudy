import React, { useState } from 'react';
import mockProducts from '../mockData';
import ProductForm from './ProductForm';

const AdminProfile = () => {
  const [products, setProducts] = useState(mockProducts);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleSave = (updatedProduct) => {
    if (updatedProduct.id) {
      // Update existing
      setProducts(products.map(p => (p.id === updatedProduct.id ? updatedProduct : p)));
    } else {
      // Create new
      const newProduct = { ...updatedProduct, id: Date.now() };
      setProducts([...products, newProduct]);
    }
    setEditingProduct(null);
  };

  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>
      <ProductForm onSave={handleSave} editingProduct={editingProduct} />

      <hr />
      <h4>Product List</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th><th>Price</th><th>Category ID</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.categoryId}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(product)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProfile;
