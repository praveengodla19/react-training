import { Link } from "react-router-dom";
import React from "react";
function Header({ isAuthenticated, onLogout }) {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="brand">Product CRUD</h1>
      </div>

      <nav className="header-nav">
        {isAuthenticated ? (
          <>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/add" className="nav-link">Add Product</Link>
            <button className="logout-btn" onClick={onLogout}>Logout</button>
          </>
        ) : (
          <Link to="/login" className="nav-link">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
