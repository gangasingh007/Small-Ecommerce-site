import React from 'react';
import editbtn from "../assets/edit.svg";
import deletebtn from "../assets/delete.svg";
import './ProductCard.css';

const ProductCard = ({ name, price, image, onEdit, onDelete }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="price">{price}</div>
        <div className="features">
          <div className="edit" onClick={onEdit}>
            <img src={editbtn} alt="Edit" />
          </div>
          <div className="Delete" onClick={onDelete}>
            <img src={deletebtn} alt="Delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
