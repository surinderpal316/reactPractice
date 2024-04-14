import React, { useState, useEffect } from 'react';
import {  useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';


function Product() {
  const [products, getProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);


  const addToCart = (product)=>{
    dispatch(add(product))

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
        onClick={()=>addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <div className="container mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards}
      </div>
    </>
  );
}

export default Product;
