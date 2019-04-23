import React from 'react'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CartItem from './CartItem'
import {fetchCartItems} from '../store/cart'

class Cart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (this.props.user) {
      this.props.fetchCart(this.props.user.id)
    }
  }

  handleClick(evt) {
    evt.preventDefault()
  }

  render() {
    const {cart} = this.props
    return (
      <div>
        <br />
        Shopping Cart:
        <br />
        <br />
        {cart ? (
          cart.map(item => (
            <div key={item.id}>
              <CartItem item={item} />
            </div>
          ))
        ) : (
          <h3>YOUR CART IS EMPTY</h3>
        )}
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

const mapStateToProps = state => ({
  cart: state.cart,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  fetchCart: userId => dispatch(fetchCartItems(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
