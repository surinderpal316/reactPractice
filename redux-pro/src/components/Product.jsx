import React from 'react'
import { useState,useEffect } from 'react'
import Button from 'react-bootstrap';
import Card from 'react-bootstrap'

const [products,getProducts] = useState([]);

useEffect(() => {
    //api
    fetch('https://fakestoreapi.com/products')
    .then(data=> data.json())
    .then(result=> getProducts(result))
    
}, [])

const card =products.map(product => {
    <div className='col-md-3'>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

})


function Product() {
  return (
    <>
    <h1>Product Dashboard</h1>
    {card}
    </>    
  )
}

export default Product