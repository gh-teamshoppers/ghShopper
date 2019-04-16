import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default class SingleCoffeePage extends React.Component {
  render() {
    const {name, description, price, origin, preparation} = this.props.coffee

    return (
      <Jumbotron>
        <h1>
          Sample Coffee Name
          {/* {name} */}
        </h1>
        <img src="https://cdn1.medicalnewstoday.com/content/images/articles/323/323594/white-cup-with-black-coffee.jpg" />
        <p>
          Description goes here:
          {/* {description} */}
        </p>
        <p>
          Price:
          {/* {price} */}
        </p>
        <p>
          Preparation:
          {/* {preparation} */}
        </p>
        <p>
          Origin:
          {/* {origin} */}
        </p>
        <p>
          <Button variant="primary">Learn more!</Button>
        </p>
      </Jumbotron>
    )
  }
}
