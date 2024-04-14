import { useEffect,useCallback, useState } from 'react'

import './App.css'
import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)
  const [todos,setTodo] = useState([])

  
const addTodo = useCallback (()=>{
    setTodo((prev)=> [...prev,`new-Entry`])
  },[todos]);

  return (
    <>

      <Todo todos={todos} addTodo={addTodo}/>
      <div className="card">
        <h2>Counter is :{count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
   
    </>
  )
}

export default App
