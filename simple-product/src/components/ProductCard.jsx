import React from "react";

export default function ProductCard({ product, onDelete }) {
  // props used here: product object and onDelete callback
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
      <p>Qty: {product.qty}</p>

      {/* conditional rendering: only show delete if qty === 0 as example */}
      {product.qty === 0 ? (
        <button onClick={onDelete} className="danger">Delete</button>
      ) : (
        <button onClick={() => alert("Can't delete when qty > 0")}>Delete</button>
      )}
    </div>
  );
}
