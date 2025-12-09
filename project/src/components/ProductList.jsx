import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onEdit, onDelete, isAdmin }) {
  return (
    <div className="row g-3">
      {products.map((p) => (
        <div key={p.id} className="col-12 col-md-6 col-lg-4">
          <ProductCard
            product={p}
            onEdit={() => onEdit(p)}
            onDelete={() => onDelete(p)}
            isAdmin={isAdmin}
          />
        </div>
      ))}
    </div>
  );
}
