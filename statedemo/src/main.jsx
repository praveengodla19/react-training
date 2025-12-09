import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Employee from './Employee.jsx'
import Product from './Product.jsx'
import Greeting from './Greeting.jsx'
import Cart from './Cart.jsx'
import RenderRole from './RenderRole.jsx'
import Toggle from './Toggle.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Employee />
  </StrictMode>,
)
