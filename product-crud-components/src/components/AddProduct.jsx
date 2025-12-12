import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../display.css";
import React from "react";
function AddProduct({ onAdd }) {
  const [form, setForm] = useState({
    productId: "",
    name: "",
    quantity: "",
    price: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      productId: Number(form.productId),
      name: form.name.trim(),
      quantity: Number(form.quantity),
      price: Number(form.price)
    };
    if (!newProduct.productId || !newProduct.name) {
      return alert("Please provide Product ID and Name.");
    }

    onAdd(newProduct);
    navigate("/products");
  };

  return (
    <div className="edit-container">
      <h2>Add Product</h2>
      <form className="edit-form" onSubmit={handleSubmit}>
        <div>
          <label>Product ID:</label>
          <input type="number" name="productId" value={form.productId} onChange={handleChange} required/>
        </div>

        <div>
          <label>Name:</label>
          <input name="name" value={form.name} onChange={handleChange} required/>
        </div>

        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" value={form.quantity} onChange={handleChange}/>
        </div>

        <div>
          <label>Price:</label>
          <input type="number" name="price" value={form.price} onChange={handleChange}/>
        </div>

        <button type="submit" className="edit-btn">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
