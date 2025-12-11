import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Contact from './components/Contact'
import Aboutus from './components/Aboutus'
import NotFound from './components/NotFound'
import { Routes,Route, Link } from 'react-router-dom'
import Login from './components/Login';
import Success from './components/Success'
import Fail from './components/Fail'
import Product from './components/Product'
function App() {
  const [count, setCount] = useState(0)

  

  return (

    <>
    
    <table border="1">
      <tr>
      <td><Link to="/">Login</Link></td>
      <td><Link to="/index">Index</Link></td>
      <td><Link to="/contact">Contact</Link></td>
      <td><Link to="/about">About</Link></td>
      </tr>
    </table>
    
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/product/:id/:name' element={<Product />} />
        <Route path="/success/:username" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
        <Route path="/index" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
     
    </>
  )
}

export default App
