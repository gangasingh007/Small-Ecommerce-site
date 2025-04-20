import React, { useState } from 'react';
import './CreatePage.css'; 
import { toast } from 'react-toastify';
import HomePage from './HomePage';

const CreatePage = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [image, setimage] = useState("");

  const createproduct = async () => {
    if (name === "" || price === "" || image === "") {
      toast.warn("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        body: JSON.stringify({ name, price, image }),
        headers: {
          "Content-type": "application/json"
        }
      });

      if (response.ok) {
        toast.success("Product added successfully!");
        setname("");
        setprice("");
        setimage("");
      } else {
        toast.error("Failed to add product.");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="page">
      <h1>Create a New Product</h1>
      <div className="form-container">
        <input type="text" placeholder="Enter the name of the Product" value={name} onChange={(e) => setname(e.target.value)} />
        <input type="text" placeholder="Enter the Price of the Product" value={price} onChange={(e) => setprice(e.target.value)} />
        <input type="text" placeholder="Enter the Image Link of the Product" value={image} onChange={(e) => setimage(e.target.value)} />
        <button onClick={createproduct}>Add Product</button>
        <a href="/"> Go Back</a>
      </div>
    </div>
  );
};

export default CreatePage;
