import React from 'react'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import CartItem from './CartItem'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick(evt) {
    evt.preventDefault()
  }

  render() {
    return (
      <div>
        <br />
        Shopping Cart:
        <br />
        <br />
        <CartItem />
        <br />
        <br />
        <h3>Order Total: </h3>
        <br />
        <Link to="/checkout">
          <Button variant="primary" type="submit">
            Checkout
          </Button>
        </Link>
      </div>
    )
  }
}

export default Cart
