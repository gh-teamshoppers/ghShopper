import React from 'react'
import {connect} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

export const HomePage = props => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d2j7buzcz7y5px.cloudfront.net/wp-content/uploads/2015/03/robert-escuin-roaster-slideshow-thumbnail.png"
            alt="Coffee Slide 1"
          />
          <Carousel.Caption>
            <h3>How we prepare our coffee...</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn1.medicalnewstoday.com/content/images/articles/323/323594/white-cup-with-black-coffee.jpg"
            alt="Coffee Slide 2"
          />

          <Carousel.Caption>
            <h3>Nothing better than a cuppa joe!</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media1.popsugar-assets.com/files/thumbor/KKcmHhvJF1jCEGxWyivc4oT1xkU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/11/27/663/n/37141241/tmp_XKbVC4_b39cd58069d3ce29_PS17_0003_Travel-149_1_.jpg"
            alt="Coffee Slide 3"
          />

          <Carousel.Caption>
            <h3>The best coffee by us, for you, every day.</h3>
n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
