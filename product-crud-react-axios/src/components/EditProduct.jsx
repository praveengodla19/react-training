import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../display.css";
import React from "react";
function EditProduct({ products = [], onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const pid = Number(id);
  const existing = products.find((p) => p.productId === pid);

  const [formData, setFormData] = useState(
    existing || { productId: pid, name: "", quantity: 0, price: 0 }
  );

  useEffect(() => {
    if (existing) setFormData(existing);
  }, [existing]);

  useEffect(() => {
    if (!existing) {
      navigate("/products", { replace: true });
    }
  }, [existing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "productId" || name === "quantity" || name === "price"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    navigate("/products");
  };

  if (!existing) return null;

  return (
    <div className="edit-container">
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit} className="edit-form">
        <div>
          <label>Product ID:</label>
          <input
            type="number"
            name="productId"
            value={formData.productId}
            onChange={handleChange}
            readOnly
          />
        </div>

        <div>
          <label>Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="edit-btn">Update</button>
        <button type="button" className="cancel-btn" onClick={() => navigate("/products")}>Cancel</button>
      </form>
    </div>
  );
}

export default EditProduct;
