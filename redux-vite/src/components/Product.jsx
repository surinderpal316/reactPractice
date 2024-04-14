import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  const cards = products.map((product) => (
    <Col xs={12} md={6} lg={4} key={product.id} className="mb-3">
      <Card >
        <Card.Img variant="top" src={product.image} alt={product.title} style={{ height: '100px', width: '100px' }} />

        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <>
      <h1>Product Dashboard</h1>
      <Row className="justify-content-center">
        {cards}
      </Row>
    </>
  );
}

export default Product;
