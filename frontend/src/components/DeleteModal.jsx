import React from 'react';
import './DeleteModal.css';

const DeleteModal = ({ productName, onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal delete-modal">
        <h2>Delete Product</h2>
        <p>Are you sure you want to delete?</p>
        <div className="modal-actions">
          <button className="danger" onClick={onConfirm}>Yes, Delete</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
