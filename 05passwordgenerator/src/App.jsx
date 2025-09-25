import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [Password, setPassword] = useState('')


  //useRef = useRef ek hook hai jo kisi value ko store krne ke liye use hota h bina component ko re-render kiye.

  // method for generating password
  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (charAllowed) str += "!@#$%^&*()_+<>?:{}"
    if (numberAllowed) str += "0123456789"

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])


  useEffect(() => {
    PasswordGenerator()
  },[length, numberAllowed, charAllowed, PasswordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 text-center'>

        <h1 className='text-4xl text-center text-white my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          className="outline-none w-full py-1 px-3 bg-white text-gray-700"
          value={Password} 
          placeholder='password' 
          readOnly />

          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0" onClick={PasswordGenerator}>Copy</button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6} 
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label> Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={(e) => {setNumberAllowed((prev) => !prev);  
            }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={charAllowed}
            id='characterInput'
            onChange={(e) => {setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="characterInput">characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
