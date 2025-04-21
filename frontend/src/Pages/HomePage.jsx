import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import EditModal from '../components/EditModal';
import DeleteModal from '../components/DeleteModal';
import './HomePage.css';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        const json = await res.json();
        setItems(json.products || []);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const openEditModal = (product) => setEditingProduct(product);
  const closeEditModal = () => setEditingProduct(null);

  const openDeleteModal = (product) => setDeletingProduct(product);
  const closeDeleteModal = () => setDeletingProduct(null);

  const handleUpdate = async (updatedProduct) => {
    try {
      await fetch(`http://localhost:3000/update/${updatedProduct._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedProduct),
      });

      setItems((prev) =>
        prev.map((item) => (item.id === updatedProduct._id ? updatedProduct : item))
      );
      closeEditModal();
    } catch (err) {
      console.error("Failed to update product:", err);
    }
    fetchProducts();
  };

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/delete/${deletingProduct._id}`, {
        method: 'DELETE',
      });

      setItems((prev) =>
        prev.filter((item) => item.id !== deletingProduct.id)
      );
      closeDeleteModal();
    } catch (err) {
      console.error("Failed to delete product:", err);
    }
    fetchProducts()
  };

  return (
    <>
      <h1>Current Products</h1>

      {items.length === 0 ? (
        <p className="no-products">No products available</p>
      ) : (
        <div className="items-container">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              onEdit={() => openEditModal(product)}
              onDelete={() => openDeleteModal(product)}
            />
          ))}
        </div>
      )}

      {editingProduct && (
        <EditModal
          product={editingProduct}
          onClose={closeEditModal}
          onSave={handleUpdate}
        />
      )}

      {deletingProduct && (
        <DeleteModal
          productName={deletingProduct.name}
          onClose={closeDeleteModal}
          onConfirm={handleDelete}
        />
      )}
    </>
  );
};

export default HomePage;
