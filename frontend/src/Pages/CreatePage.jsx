import React from 'react';
import './CreatePage.css'; 
import { useState } from 'react';

const CreatePage = () => {
    const [name,setname]=useState("");
    const [price,setprice]=useState("");
    const [image,setimage]=useState("");

    const createproduct = async()=>{
        if(!(name==""||price==""||image=="")){
            try {
                const response = await fetch("http://localhost:3000/create" ,{
                    method:"POST",
                    body: JSON.stringify({
                        name:name,
                        price:price,
                        image:image
                    }),
                    headers: {
                        "Content-type":"application/json"
                    }
                })
            } catch (error) {
                
            }
        }
    }
    

  return (
    <div className="page">
      <h1>Create a New Product</h1>
      <div className="form-container">
        <input type="text" placeholder="Enter the name of the Product" value={name} onChange={(e)=>{
            const value = e.target.value;
            setname(value)
        }}/>
        <input type="number" placeholder="Enter the Price of the Product" value={price} onChange={(e)=>{
            const value = e.target.value;
            setprice(value)
        }} />
        <input type="text" placeholder="Enter the Image Link of the Product" value={image} onChange={(e)=>{
            const value = e.target.value;
            setimage(value)
        }} />
        <button onClick={createproduct}>Add Product</button>
      </div>
    </div>
  );
};


export default CreatePage;
