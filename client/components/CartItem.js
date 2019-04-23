import React from 'react'
import Card from 'react-bootstrap/Card'

const CartItem = props => {
  return (
    <Card style={{width: '18rem'}}>
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Img
          variant="top"
          src="https://images-na.ssl-images-amazon.com/images/I/91SLInFPjGL._SY355_.jpg"
        />
        <Card.Subtitle className="mb-2 text-muted">Quantity</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Price</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Size</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Add Another</Card.Link>
        <br />
        <Card.Link href="#">Delete Item</Card.Link>
        <br />
        <Card.Link href="#">See Details</Card.Link>
        <br />
      </Card.Body>
    </Card>
  )
}

export default CartItem
