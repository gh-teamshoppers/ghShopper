import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export const SingleCoffee = props => {
  // const {name, imgUrl, price} = props.coffee

  return (
    <div>
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src=
        // {imgUrl}
        'https://cdn1.medicalnewstoday.com/content/images/articles/323/323594/white-cup-with-black-coffee.jpg'
        />
        <Card.Body>
          <Card.Title>
          {/* {name} */}
          Coffee
          </Card.Title>
          <Card.Text>
          {/* {price} */}
          $10
          </Card.Text>
          <Button variant="primary">See more!</Button>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

// const mapStateToProps = state => ({
//   coffee: state.coffee
// })

// const mapDispatchToProps = dispatch => ({
//   // fetchCoffee: coffeeId => dispatch(fetchCoffee(coffeeId))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(SingleCoffee)
