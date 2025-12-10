import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentB from './context-demo/ComponentB'

function App() {
  const [message, setMessage] = useState("Hello From AppComponent")

  return (
    <>
    <h2>Property Drilling</h2>
    <input type = "text " value ={message} onChange={((e)=>setMessage(e.target.value))} />
    <ComponentB message={message} />
    </>
  )
}

export default App
