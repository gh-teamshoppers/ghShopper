import React from 'react'
import {connect} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

export const HomePage = props => {
  return (
    <div className="slideshow">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1525797559391-d6c6fd668582?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            alt="Coffee Slide 1"
          />
          <Carousel.Caption>
            <h1>Welcome to Expresso.js</h1>
            <h3>...made by techies, for techies.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn1.medicalnewstoday.com/content/images/articles/323/323594/white-cup-with-black-coffee.jpg"
            alt="Coffee Slide 2"
          />

          <Carousel.Caption>
            <h1>Espresso yourself</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/982612/pexels-photo-982612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Coffee Slide 3"
          />

          <Carousel.Caption>
            <h1>The best coffee by us, for you, every day.</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
