import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {addToCart} from '../store/cart'

class SingleCoffee extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.addToCart(this.props.user.id, event.target.id)
  }

  render() {
    const {name, imgUrl, price, id} = this.props.coffee

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
            <Button variant="primary">Add To Cart</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  coffee: state.coffees.coffee,
  user: state.user,
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  addToCart: (userId, productId) => dispatch(addToCart(userId, productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleCoffee)
