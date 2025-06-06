import { useState, useCallback, useEffect, useRef, } from 'react'


function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator  = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 1; i <= length; i++) {
      let randomTndex = Math.floor(Math.random()*str.length + 1);
      
      pass += str.charAt(randomTndex)

    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyPasswordToClipboard =() =>{
    passwordRef.current.select();
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])


  return (
    <>
     <div
      className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-12 text-orange-500 bg-gray-800'
      >
        <h1 className='text-white text-center my-3'> Password Generator</h1>
        <div className='flex overflow-hidden mb-4 rounded-lg '>
          <input
           type="text" 
           value={password}
           className='outline-none w-full py-2 px-5 bg-white text-black'
           placeholder='password'
            ref = {passwordRef}
           readOnly
          />

          <button 
          onClick = { copyPasswordToClipboard}
          className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 cursor-pointer'>
            copy
          </button>
        </div>

      <div className='text-sm flex gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length : { length }</label>
        </div>

        <div className='flex gap-x-1 items-center'>
          <input type="checkbox"
           id="numberInput"
           defaultChecked ={setNumberAllowed} 
           onChange={() => {
            setNumberAllowed((prev) => !prev)
           }} 
           />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className='flex gap-x-1 items-center'>
          <input type="checkbox"
           id="characterInput"
           defaultChecked ={setCharacterAllowed} 
           onChange={() => {
            setCharacterAllowed((prev) => !prev)
           }} 
           />
          <label htmlFor="characterInput">Characters</label>

        </div>

      </div>
     </div>
    </>
  )
}

export default App
