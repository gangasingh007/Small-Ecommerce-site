import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

const HomePage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const json = await res.json();
        setItems(json.products); // or setItems(json) if it's just an array
        console.log(json.products); // debug
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts(); // only runs once
  }, []);

  return (
    <>
      <h1>Current Products</h1>
      <div className="items-container">
        {items.length === 0 ? (
          <p style={{ color: 'gray' }}>No products available Currently.</p>
        ) : (
          items.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))
        )}
      </div>
    </>
  );
};

export default HomePage;
