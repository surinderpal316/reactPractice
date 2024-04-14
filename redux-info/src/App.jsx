import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from 'react-router-dom';
import Product from './components/Product';
import Cart from './components/Cart';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Dashboard/>} />
        <Route path='cart' element={<Cart />} />
        <Route path='product' element={<Product />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      <div>
        <h1 className='flex item-center justify-center bg-slate-500 rounded-sm'>Product Info</h1>
        {router}
      </div>
    </RouterProvider>
  );
}

export default App;
