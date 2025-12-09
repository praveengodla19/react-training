import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

   function increment(){
           setCount(count+1);
    };
   const  decrement = () => {
           setCount(count-1);
    };

  return (
    <>
    <div>
       <h2>This is from functional component</h2>
      <h2> count : {count} </h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
    </>
  )
}

export default App
