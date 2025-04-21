import React, { useState } from 'react';
import './EditModal.css';

const EditModal = ({ product, onClose, onSave }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);

  const handleSubmit = () => {
    onSave({ ...product, name, price, image });
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Edit Product</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" />
        <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
        <div className="modal-actions">
          <button onClick={handleSubmit}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
