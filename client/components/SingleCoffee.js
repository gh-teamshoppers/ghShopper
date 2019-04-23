import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {fetchCartItems, addToCart} from '../store/cart'

class SingleCoffee extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.findProductIdinCart = this.findProductIdinCart.bind(this)
  }

  componentDidMount() {
    this.props.fetchCartItems(this.props.userId)
  }

  findProductIdinCart(searchId, cart) {
    const [matched] = cart[0].products.filter(el => {
      return el.id === searchId
    })
    return matched.OrdersProducts.quantity
  }

  handleClick(evt) {
    evt.preventDefault()

    const productsIdinCart = this.props.cart[0].products.map(el => el.id)

    if (!productsIdinCart.includes(this.props.coffee.id)) {
      this.props.addToCart(
        this.props.coffee,
        this.props.cart,
        this.props.userId,
        this.props.quantity
      )
    } else {
      console.log('Working in Progress!!  {MACA }')
      // Working in Progress!!  {MACA }
      // qty = this.findProductIdinCart(id)
      // console.log('quantity', qty)
    }
  }

  render() {
    const {name, imgUrl, price, id} = this.props.coffee
    console.log('UserID', this.props.userId)

    return (
      <div>
        <Card style={{width: '18rem'}}>
          <Card.Img variant="top" src={imgUrl} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>

            <Link to={`/coffees/${id}`}>
              <Button variant="primary">See more!</Button>
            </Link>
            <Link to="/cart">
              <Button onClick={this.handleClick} variant="primary">
                Add To Cart
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  coffees: state.coffees,
  userId: state.user.id,
  cart: state.cart,
  quantity: 1
})

const mapDispatch = dispatch => ({
  addToCart: (item, userId, quantity) =>
    dispatch(addToCart(item, userId, quantity)),
  fetchCartItems: orderId => dispatch(fetchCartItems(orderId))
})

export default connect(mapStateToProps, mapDispatch)(SingleCoffee)
