import React from "react";

export default function ProductCard({ product, onDelete }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>

      <p className="price">₹ {product.price}</p>
      <p className="qty">Qty: {product.qty}</p>

      {/* Optional: muted meta text */}
      <p className="meta">Product ID: {product.id}</p>

      <button
        onClick={onDelete}
        className={product.qty === 0 ? "danger" : "danger"}
      >
        {product.qty === 0 ? "Delete" : "Cannot Delete"}
      </button>
    </div>
  );
}
