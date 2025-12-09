import React from "react";

export default function ProductCard({ product, onEdit, onDelete, isAdmin }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text mb-1"><strong>ID:</strong> {product.id}</p>
        <p className="card-text mb-1"><strong>Price:</strong> ₹{product.price}</p>
        <p className="card-text mb-3"><strong>Qty:</strong> {product.qty}</p>

        <div className="mt-auto d-flex gap-2">
          <button className="btn btn-sm btn-outline-primary w-100" onClick={onEdit}>
            Edit
          </button>

          {isAdmin && (
            <button className="btn btn-sm btn-danger w-100" onClick={onDelete}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
