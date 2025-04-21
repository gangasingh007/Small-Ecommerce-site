import React from 'react';
import editbtn from "../assets/edit.svg";
import deletebtn from "../assets/delete.svg";
import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <div className="card">
      <div className="image">
        <img src={props.image} alt={`${props.name}`} />
      </div>
      <div className="info">
        <div className="name">{props.name}</div>
        <div className="price">${props.price}</div>
        <div className="features">
          <div className="edit">
            <img src={editbtn} alt="Edit" />
          </div>
          <div className="Delete">
            <img src={deletebtn} alt="Delete" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
