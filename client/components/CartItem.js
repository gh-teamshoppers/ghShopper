import React from 'react'
import Card from 'react-bootstrap/Card'

const CartItem = props => {
  const {imgUrl, quantity, price, weight, name} = props.item
  //const qty = props.item.OrdersProducts.quantity
  return (
    <Card style={{width: '600px'}} className="cart">
      <Card.Body>
        <br />
        <Card.Title>Product Name: {name}</Card.Title>
        <br />
        <Card.Img variant="top" src={imgUrl} />
        <br />
        <br />
        <Card.Subtitle className="mb-2 text-muted">
    Quantity: 1</Card.Subtitle>
        <br />
        <Card.Subtitle className="mb-2 text-muted">
          Price: ${price}{' '}
        </Card.Subtitle>
        <br />
        <Card.Subtitle className="mb-2 text-muted">
          Weight {weight}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default CartItem
