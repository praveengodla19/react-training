import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import productService from "./services/productService";

export default function App() {
  // state: list of products and whether we're showing add form
  const [products, setProducts] = useState(productService.getAllSync());
  const [showAddForm, setShowAddForm] = useState(false);

  // Add product handler (state update)
  const handleAdd = (prod) => {
    const created = productService.create(prod);
    setProducts((prev) => [...prev, created]);
    setShowAddForm(false); // conditional rendering: hide form after add
  };

  // Delete product handler
  const handleDelete = (id) => {
    productService.remove(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="app">
      <header>
        <h1>Simple Product Manager</h1>
        <button onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? "Cancel" : "Add Product"}
        </button>
      </header>

      {/* conditional rendering: show form when showAddForm true */}
      {showAddForm && <ProductForm onSubmit={handleAdd} />}

      {/* conditional rendering: if products empty show message */}
      {products.length === 0 ? (
        <p className="empty">No products available. Add your first product.</p>
      ) : (
        <ProductList products={products} onDelete={handleDelete} />
      )}
    </div>
  );
}
