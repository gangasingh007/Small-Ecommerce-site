import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import './HomePage.css';

const HomePage = () => {
  const [items, setitems] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:3000/products")
      .then(async(res)=>{
        const json = await res.json();
        setitems(json.products);
      })
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  };
      fetchProducts();
    
    return (
      <>
      <h1>Current Products</h1>
        <div className="items-container">
        {items.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
        </div>
      </>
      
  );
}

export default HomePage

