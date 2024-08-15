import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter, setCounter] = useState(15);
// let counter = 10
const addValue = () => {
  if(counter <= 19 && counter !== -1) {
  setCounter(counter = counter + 1);
  } 
};
const removeValue = () => {
  if(counter !== 0) {
  setCounter(counter = counter - 1);
  }   
}
  return (
    <>
    <h1>02 Counter</h1>
    <h2>Counter: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
