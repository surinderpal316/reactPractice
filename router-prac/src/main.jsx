import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,createRoutesFromElements,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Footer from './component/Footer.jsx'
import About from './component/About.jsx'
import Body from './component/Body.jsx'
import Home from './component/Home.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='About' element={<About/>} />
      <Route path='Body' element={<Body/>} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
