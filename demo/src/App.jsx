import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './Display'
import Greeting from './Greeting'
import TestData from './TestData'
function App() {
  
  // Processing of data 

  const data = [10,20,30,40,50,60,70,80,90,100];
  const products = [
    {id:1001,name:"laptop", price:50000},
    {id:1002,name:"mobile", price:75000},
    {id:1003,name:"charger", price:2000},
    {id:1004,name:"table", price:25000},
    {id:1005,name:"mouse", price:400},
    {id:1006,name:"pendrive", price:1400}
  ];

  return (
    <>
      <Greeting name="Praven" city="Hyderabad" />
      <TestData nos = {data} />
      <Display products = {products}/>
    </>
  )
}

export default App
