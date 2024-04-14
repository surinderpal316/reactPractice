import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  const addVal = () =>{
    setCount (count+1)
    setCount (count+5)

  }

  const removeVal =() =>{
    setCount (prevCount => prevCount -1);
  }
  const muxVal =() => {
    setCount (prevCount => prevCount*10);
  }

  return (
    <>
    <h1>Chai aur Counter {count}</h1>

    <button onClick={addVal} value={count}>
      Add
    </button>
    <br/>
    <br/>
    <button onClick={removeVal} value={count}>
      Remove

    </button>
    <button onClick={muxVal} value={count}>
    Mux

    </button>
    </>
  )
}

export default App
