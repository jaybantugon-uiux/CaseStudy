import React, { useEffect, useState } from 'react';

const ProductForm = ({ onSave, editingProduct }) => {
  const [form, setForm] = useState({ name: '', price: '', categoryId: '', description: '', image: '' });

  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
    } else {
      setForm({ name: '', price: '', categoryId: '', description: '', image: '' });
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, price: parseFloat(form.price) });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col-md-3 mb-2">
          <input name="name" className="form-control" placeholder="Name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="col-md-2 mb-2">
          <input type="number" name="price" className="form-control" placeholder="Price" value={form.price} onChange={handleChange} required />
        </div>
        <div className="col-md-2 mb-2">
          <input name="categoryId" className="form-control" placeholder="Category ID" value={form.categoryId} onChange={handleChange} required />
        </div>
        <div className="col-md-3 mb-2">
          <input name="image" className="form-control" placeholder="Image URL" value={form.image} onChange={handleChange} />
        </div>
        <div className="col-md-10 mb-2">
          <textarea name="description" className="form-control" placeholder="Description" value={form.description} onChange={handleChange} />
        </div>
        <div className="col-md-2 mb-2">
          <button className="btn btn-success w-100">{editingProduct ? 'Update' : 'Add'}</button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
