import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ConfirmModal from "./components/ConfirmModal";
import productService from "./services/productService";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [toDeleteProduct, setToDeleteProduct] = useState(null);
  const [isAdmin, setIsAdmin] = useState(true);

  useEffect(() => {
    setLoading(true);
    productService.getAll().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  const handleAdd = (product) => {
    const created = productService.create(product);
    setProducts((prev) => [...prev, created]);
  };

  const handleUpdate = (updated) => {
    productService.update(updated);
    setProducts((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
    setEditingProduct(null);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteConfirm = (product) => {
    setToDeleteProduct(product);
    setShowConfirm(true);
  };

  const handleDelete = () => {
    if (!toDeleteProduct) return;
    productService.remove(toDeleteProduct.id);
    setProducts((prev) => prev.filter((p) => p.id !== toDeleteProduct.id));
    setToDeleteProduct(null);
    setShowConfirm(false);
  };

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container my-4">
      <Header isAdmin={isAdmin} onToggleAdmin={() => setIsAdmin(!isAdmin)} />

      <div className="row g-3 align-items-start">
        <div className="col-12 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              {editingProduct ? (
                <>
                  <h5 className="card-title">Edit Product</h5>
                  <ProductForm
                    key={editingProduct.id}
                    initialData={editingProduct}
                    onSubmit={handleUpdate}
                    onCancel={() => setEditingProduct(null)}
                  />
                </>
              ) : (
                <>
                  <h5 className="card-title">Add Product</h5>
                  <ProductForm onSubmit={handleAdd} />
                </>
              )}
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-8">
          <div className="d-flex mb-3 justify-content-between align-items-center">
            <SearchBar value={searchText} onChange={(t) => setSearchText(t)} />
            <div>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setProducts(productService.getAllSync())}
                title="Reset to initial sample list"
              >
                Reset Sample Data
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status" />
              <div className="mt-2 text-muted">Loading products...</div>
            </div>
          ) : products.length === 0 ? (
            <div className="alert alert-info">No products available.</div>
          ) : filtered.length === 0 ? (
            <div className="alert alert-warning">No matching products for "{searchText}".</div>
          ) : (
            <ProductList
              products={filtered}
              onEdit={handleEdit}
              onDelete={handleDeleteConfirm}
              isAdmin={isAdmin}
            />
          )}
        </div>
      </div>

      <ConfirmModal
        open={showConfirm}
        title="Delete Product?"
        message={
          toDeleteProduct ? `Are you sure you want to delete "${toDeleteProduct.name}"?` : ""
        }
        onConfirm={handleDelete}
        onCancel={() => {
          setShowConfirm(false);
          setToDeleteProduct(null);
        }}
      />
    </div>
  );
}

export default App;
