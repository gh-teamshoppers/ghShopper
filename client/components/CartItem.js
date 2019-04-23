import React from 'react'
import Card from 'react-bootstrap/Card'

const CartItem = props => {
  const {imgUrl, quantity, price, weight, name} = props.item
  return (
    <Card style={{width: '18rem'}}>
      <Card.Body>
        <Card.Title>Product Name: {name}</Card.Title>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Subtitle className="mb-2 text-muted">
          Quantity: {quantity}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Price:{price}{' '}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Weight {weight}
        </Card.Subtitle>

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
