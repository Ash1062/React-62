
import { useState, useCallback } from 'react'

function App() {
const [length, setLength] = useState(8)
const [numAllowed, setNumAllowed] = useState(false);
const [charAllowed, setCharAllowed] = useState(false);
const [password, setPassword] = useState("")

const paswordGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numAllowed) str += "0123456789"
  if(charAllowed) str += "!%$&*_$#?"

  for (let index = 1; index <= length; index++) {
    let char = Math.floor((Math.random() * str.length) + 1);
    pass += str.charAt(char);   
  }
  setPassword(pass);
}, [length, numAllowed, charAllowed, setPassword])
  return (
    <>
<div className=' w-full max-w-md  mx-auto shadow-md rounded-lg
 text-orange-400 px-4
 my-10 py-4 bg-gray-700 '>
  <h1 className=' text-white text-center my-3'>Password Generator</h1>
  <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
    <input type=" text " value={password}
    className=' outline-none w-full py-2 px-3'
    placeholder='password'
    readOnly />
    <button className=' bg-blue-700 text-white px-4
    '>copy</button>
  </div>
  <div className=' flex text-sm gap-x-2'>
    <div className=' flex items-center gap-x-1'>
      <input type= "range" 
      min={6}
      max={50}
      value={length}
      className=' cursor-pointer'
      onChange={(e) => setLength(e.target.value)}
      />
      <label>length: {length}</label>
    </div>
    
  </div>
 </div>
    </>
  )
}

export default App
