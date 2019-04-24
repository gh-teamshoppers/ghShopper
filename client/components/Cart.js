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
    console.log('user id', this.props.userId)
    if (this.props.userId) {
      this.props.fetchCartItems(this.props.userId)
    }
  }

  handleClick(evt) {
    evt.preventDefault()
  }

  render() {
    const {cart, userId} = this.props
    console.log(userId)

    return (
      <div className="cart">
        <br />
        <h2>Shopping Cart:</h2>
        <br />
        <br />
        {cart ? (
          cart.map(item => (
            <div key={item.id}>
              <CartItem item={item}  />
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
  userId: state.user.id,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  fetchCartItems: userId => dispatch(fetchCartItems(userId))
})

export default connect(mapStateToProps, mapDispatch)(Cart)
