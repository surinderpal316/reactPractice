import { useState } from 'react'

import Product from './components/Product'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Product/>
    </>
  )
}

export default App
