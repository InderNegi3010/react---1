import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setcounter] = useState(0)

  const addValue = () => {
    counter = counter + 1
    setcounter(counter)
  }

  const romoveValue = () =>{
    counter = counter - 1
    setcounter(counter)
  }

  return (
    <>
    <div>
      <h1>chai aur react</h1>
      <h2>Counter vlaue: {counter}</h2>

      <button
        onClick={addValue}
      >add value{counter}</button>
      <br />
      <button
      onClick={romoveValue}
      >remove value {counter}</button>
    </div>
    </>
  )
}

export default App
