import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const refElement = useRef(null); // Initialize with null
  const [name, setName] = useState("Surinder");
  console.log(refElement);

  const Reset = () => {
    setName("");
  }

  const handleInput = () => {
    refElement.current.style.color = "blue";
  }
   
  return (
    <>
      <h2>Learing useRef</h2>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} ref={refElement}></input>
      <button onClick={Reset}>reset</button>
      <button onClick={handleInput}>handle Input </button>
    </>
  )
}

export default App;
