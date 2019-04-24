import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <Card className="text-center">
          <Card.Header>
            Our story began in May of 2019 in the Grace Hopper 1902 Cohort...
          </Card.Header>
          <Card.Body>
            <Card.Title>
              Fast forward a week later, we’ve grown, we’ve evolved, and we've
              learned... to just brew it.
            </Card.Title>
            <img
              className="d-block w-100"
              src="https://www.roastycoffee.com/wp-content/uploads/blake-wisz-549106-unsplash-e1531935387231.jpg"
              alt="About-us-coffee"
            />
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default AboutUs
