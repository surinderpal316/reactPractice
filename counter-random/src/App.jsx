import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [click,setClick] = useState ([])
 


  const addNumber = () => {
    setClick([
      ...click,
      {
        id: click.length,
        value: Math.floor(Math.random() *(6  - 1 + 1)+1),
      }    
     ]);
  };



  return (
    <>
    <h1>Random Numgen</h1>
    <div>
    <ul>

      {click.map(item => (
        <li key={item.id}>
         {item.value} 
        </li>
        
      ))} 

    </ul>
    <button onClick={addNumber} >
        clickme

    </button>
    </div>
    </> 
  )
}

export default App
