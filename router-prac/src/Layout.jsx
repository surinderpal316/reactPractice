import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'
import Navbar from './component/Navbar'

function Layout() {
  return (
   <>
   <Navbar/>
   <Outlet/>
    <Footer/>
   </>
  )
}

export default Layout