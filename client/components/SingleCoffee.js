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

  handleClick(evt) {
    this.props.addToCart(
      this.props.coffee,
      this.props.userId,
      this.props.quantity
    )
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
            <Link to="/cart">
              <button onClick={this.handleClick} type="primary">
                Add To Cart
              </button>
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
  quantity: 1
})

const mapDispatch = dispatch => ({
  addToCart: (item, userId, quantity) =>
    dispatch(addToCart(item, userId, quantity))
})

export default connect(mapStateToProps, mapDispatch)(SingleCoffee)
