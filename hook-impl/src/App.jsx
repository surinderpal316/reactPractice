import { useState,useCallback,useRef } from 'react'
import './App.css'
import Ui from './Ui'

function App() {
const [add,setAdd] = useState(1)



const Learn = useCallback(() => {

},[])

const adddIt =()=> {
setAdd (add*5)
    }

  return (
    <>
      <div>
        <h1>Learnin CallBack</h1>
        <h1>Hey{add}</h1>
        <Ui/>
        <button onClick={()=> setAdd(add*5)}>
          addtion
        </button>
        <button onClick={()=> setAdd(add+1)} >AddMore</button>
      </div>
    </>
  )
}

export default App
