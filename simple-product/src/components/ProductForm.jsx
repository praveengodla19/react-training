import React, { useState } from "react";

export default function ProductForm({ onSubmit }) {
  // controlled inputs (state)
  const [form, setForm] = useState(
    { name: "", price: "", qty: "" }
    );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      alert("Enter product name");
      return;
    }
    onSubmit({
      name: form.name.trim(),
      price: Number(form.price) || 0,
      qty: Number(form.qty) || 0
    });
    setForm({ name: "", price: "", qty: "" });
  };

  return (
    <form className="product-form" onSubmit={submit}>
      <div>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} />
      </div>

      <div>
        <label>Price</label>
        <input name="price" value={form.price} onChange={handleChange} type="number" />
      </div>

      <div>
        <label>Qty</label>
        <input name="qty" value={form.qty} onChange={handleChange} type="number" />
      </div>

      <button type="submit">Add</button>
    </form>
  );
}
