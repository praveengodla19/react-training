import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductService from '../services/ProductService'

const empty = { productId:'', name:'', quantity:'', price:'' }

export default function ProductForm() {
  const [product, setProduct] = useState(empty)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const nav = useNavigate()
  const { productId } = useParams()
  const edit = !!productId

  useEffect(()=>{
    if(edit){
      ProductService.getProduct(productId).then(r=>setProduct(r.data)).catch(()=>setError('Failed to load product'))
    }
  },[productId])

  const handleChange = (e)=>{
    const { name, value } = e.target
    setProduct(prev=>({ ...prev, [name]: value }))
  }

  const save = async (e)=>{
    e.preventDefault()
    setSaving(true)
    setError(null)
    try {
      if(edit){
        await ProductService.updateProduct(productId, product)
      } else {
        await ProductService.addProduct(product)
      }
      nav('/')
    } catch(err){ setError('Save failed') }
    setSaving(false)
  }

  return (
    <div className="card mx-auto" style={{maxWidth:700}}>
      <div className="card-body">
        <h4 className="card-title">{edit ? 'Edit Product' : 'Add Product'}</h4>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={save}>
          <div className="mb-3">
            <label className="form-label">Product ID</label>
            <input name="productId" className="form-control" value={product.productId} onChange={handleChange} required disabled={edit} />
          </div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input name="name" className="form-control" value={product.name} onChange={handleChange} required />
          </div>
          <div className="mb-3 row">
            <div className="col-md-6">
              <label className="form-label">Quantity</label>
              <input name="quantity" type="number" className="form-control" value={product.quantity} onChange={handleChange} required />
            </div>
            <div className="col-md-6">
              <label className="form-label">Price</label>
              <input name="price" type="number" className="form-control" value={product.price} onChange={handleChange} required />
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="button" className="btn btn-secondary me-2" onClick={()=>nav('/')}>Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={saving}>{saving ? 'Saving...' : 'Save'}</button>
          </div>
        </form>
      </div>
    </div>
  )
}