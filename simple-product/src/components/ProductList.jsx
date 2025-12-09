import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products, onDelete }) {
  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onDelete={() => onDelete(p.id)} />
      ))}
    </div>
  );
}
