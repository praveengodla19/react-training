import React, { useEffect, useState } from "react";

export default function ProductForm({ initialData = null, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    qty: ""
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        name: initialData.name,
        price: initialData.price,
        qty: initialData.qty
      });
    } else {
      setForm({ name: "", price: "", qty: "" });
    }
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name.trim()) {
      alert("Enter product name");
      return;
    }
    const payload = {
      name: form.name.trim(),
      price: Number(form.price) || 0,
      qty: Number(form.qty) || 0
    };
    if (initialData && initialData.id) {
      onSubmit({ ...payload, id: initialData.id });
    } else {
      onSubmit(payload);
      setForm({ name: "", price: "", qty: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="form-label small">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="mb-2">
        <label className="form-label small">Price (₹)</label>
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          type="number"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label small">Quantity</label>
        <input
          name="qty"
          value={form.qty}
          onChange={handleChange}
          type="number"
          className="form-control"
        />
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary btn-sm">
          {initialData ? "Update" : "Add"}
        </button>
        {initialData && (
          <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onCancel}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
