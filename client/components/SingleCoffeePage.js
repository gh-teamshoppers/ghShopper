import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import {getSingleCoffee} from '../store'
import {addToCart} from '../store/cart'

export class SingleCoffeePage extends React.Component {
  componentDidMount() {
    this.props.getCoffee(this.props.match.params.coffeeId)
  }
  render() {
    const {
      name,
      description,
      preparation,
      origin,
      weight,
      price,
      imgUrl
    } = this.props.coffees.coffee
    return (
      <Jumbotron>
        <h1>{name}</h1>
        <img src={imgUrl} />
        <p>
          Description:
          {description}
        </p>
        <p>
          Preparation:
          {preparation}
        </p>
        <p>
          Origin:
          {origin}
        </p>
        <p>
          Weight:
          {weight}
        </p>
        <p>
          Price:
          {price}
        </p>
        <p>
          <Button variant="primary">Add To Cart</Button>
        </p>
      </Jumbotron>
    )
  }
}

const mapStateToProps = state => ({
  coffees: state.coffees
})

const mapDispatchToProps = dispatch => ({
  getCoffee: coffeeId => dispatch(getSingleCoffee(coffeeId)),
  addToCart: () => dispatch(addToCart())
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleCoffeePage)
