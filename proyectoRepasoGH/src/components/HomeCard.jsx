import React from 'react';
import {Card, Button} from 'react-bootstrap';

const HomeCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Detalle de producto</Button>
      </Card.Body>
    </Card>
  )
}

export default HomeCard