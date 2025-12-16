import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductService from '../services/ProductService'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [query, setQuery] = useState('')

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      
      const res = await ProductService.getProducts()
      setProducts(res.data)
    } catch(e){ setError('Failed to load products') }
    setLoading(false)
  }

  useEffect(()=>{ load() },[])

  const del = async(productId)=>{
    if(!window.confirm('Are you sure you want to delete this product?')) return;
    try {
      await ProductService.deleteProduct(productId)
      setProducts(p=>p.filter(x=>String(x.productId)!==String(productId)))
    } catch(e){ alert('Delete failed') }
  }

  const filtered = products.filter(p =>
    p.name && p.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h3>Products</h3>
        <Link to="/add" className="btn btn-success">Add Product</Link>
      </div>

      <div className="mb-3 row">
        <div className="col-md-6">
          <input className="form-control" placeholder="Search by name..." value={query} onChange={e=>setQuery(e.target.value)} />
        </div>
        <div className="col-md-6 text-end">
          <button className="btn btn-secondary" onClick={load}>Refresh</button>
        </div>
      </div>

      {loading && <div>Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="table-responsive">
        <table className="table table-striped">
          <thead><tr><th>Product ID</th><th>Name</th><th>Quantity</th><th>Price</th><th>Actions</th></tr></thead>
          <tbody>
            {filtered.length===0 && <tr><td colSpan="5">No products found.</td></tr>}
            {filtered.map(p=>(
              <tr key={p.productId}>
                <td>{p.productId}</td>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{p.price}</td>
                <td>
                  <Link to={`/edit/${p.productId}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                  <button className="btn btn-danger btn-sm" onClick={()=>del(p.productId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}