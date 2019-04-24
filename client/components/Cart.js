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
      <div className="cart">
        <br />
        <h2>Shopping Cart:</h2>
        <br />
        <br />
        {cart ? (
          cart.map(item => (
            <div key={item.id}>
              <CartItem item={item} />
              <br />
            </div>
          ))
        ) : (
          <h2>YOUR CART IS EMPTY</h2>
        )}
        <br />
        <br />
        <h2>
          Order Total: $
          {cart
            ? cart
                .map(product => {
                  return product.price
                })
                .reduce((a, b) => Number(a) + Number(b), 0)
            : 0}{' '}
        </h2>
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
