import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  let myObj = {
    name: 'Oggy',
    age: 25,
    price: 23,
  }
   let newArr = [1,2,3,4]

  return (
    <>
      <div className=" bg-yellow-500 text-center p-4 text-black text-2xl rounded-lg mb-4">
        <p  >Tailwind css </p>
        </div>
        <Card username = "Oggy" price = "23 rupess" pricetic = "4 rupess"/>
    </>
  )
}

export default App
