import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import Login from './components/Login'
export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">Product CRUD</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/add">Add Product</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/add" element={<ProductForm />} />
          <Route path="/edit/:productId" element={<ProductForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}