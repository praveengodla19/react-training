import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Login from "./components/Login";
import Display from "./components/Display";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [products, setProducts] = useState([
    { productId: 101, name: "Laptop", quantity: 10, price: 50000 },
    { productId: 102, name: "Mouse", quantity: 25, price: 500 },
    { productId: 103, name: "Keyboard", quantity: 15, price: 1200 },
  ]);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Auth handlers
  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  // CRUD handlers
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.productId === updatedProduct.productId ? updatedProduct : p
      )
    );
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p.productId !== productId));
  };

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      <div className="app-container">
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? (
                <Navigate to="/products" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />

          <Route
            path="/products"
            element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <Display
                  products={products}
                  onDelete={handleDeleteProduct}
                />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add"
            element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <AddProduct onAdd={handleAddProduct} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute isAuth={isAuthenticated}>
                <EditProduct products={products} onUpdate={handleUpdateProduct} />
              </ProtectedRoute>
            }
          />

          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="*" element={<h3 style={{padding:20}}>Page not found</h3>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
