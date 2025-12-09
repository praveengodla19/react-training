import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="input-group w-100">
      <span className="input-group-text">🔍</span>
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
