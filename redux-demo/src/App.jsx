import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, incrementAsync, selectCount } from './features/counter/counterSlice'

export default function App() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(2)

  return (
    <div>
      <h2>Redux Toolkit Counter Demo</h2>
      <p>Count: {count}</p>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(incrementByAmount(Number(amount)))}>Add {amount}</button>
      <button onClick={()=>dispatch(incrementAsync(Number(amount)))}>Add Async</button>
      <br/><br/>
      <input value={amount} onChange={e=>setAmount(e.target.value)} />
    </div>
  )
}
