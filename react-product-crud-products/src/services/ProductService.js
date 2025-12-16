import axios from 'axios'
//const api = axios.create({ baseURL:'http://localhost:8080/api/products', timeout:5000, headers:{ 'Content-Type':'application/json' } })

export default {
  getProducts :()=>axios.get('http://localhost:8081/api/products/'),
  getProduct:(productId)=>axios.get('http://localhost:8081/api/products/' + productId),
  addProduct:(p)=>axios.post('http://localhost:8081/api/products/', p),
  updateProduct:(productId,p)=>axios.put('http://localhost:8081/api/products/' + productId,p),
  deleteProduct:(productId)=>axios.delete('http://localhost:8081/api/products/' + productId)
}