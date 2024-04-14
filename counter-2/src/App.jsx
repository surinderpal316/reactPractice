import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [click,setClick] = useState(0)
  const [num,setNum] = useState (" ")
  

  const clicking = ()=>{
    setClick (click+1)
   setNum (click % 2 == 0 ? "Odd" : "Even" ) 
  }


  return (
    <>
     
      <h1>Chai aur and  {click} time click {num}</h1>
      <button onClick={clicking}>
        Click here
      </button>
    </>
  )
}

export default App
