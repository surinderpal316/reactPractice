import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice';

function Cart() {
  const products= useSelector(state=> state.cart)
  const dispatch = useDispatch();
  const removeToCart =(id)=>{
    dispatch(remove(id))
    

  }

  const cards = products.map((product) => (
    <div key={product.id} className="relative h-[400px] w-[300px] rounded-md mb-4">
      <div className="flex items-center justify-center">
        <img
          src={product.image}
          className="z-0 h-full w-full rounded-md object-cover"
          alt={product.title}
          style={{ height: '300px', width: '250px' }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{product.title}</h1>
        <p className="mt-2 text-sm text-gray-300">{product.price}</p>
        <button  type="button" className="mt-2 inline-flex cursor-pointer items-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-black/80"
        onClick={()=>removeToCart (product.id)}
        >
          Remove to cart
        </button>
      </div>
    </div>
  ));

  return (
   <>
   <div>
    {cards}
   </div>
    
   </>
  )
}

export default Cart