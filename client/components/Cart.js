import React from 'react'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
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
        Shopping Cart
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

