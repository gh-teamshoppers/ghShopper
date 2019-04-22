import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export class CartCheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      street: '',
      zipcode: '',
      city: '',
      state: '',
      phone: 0,
      country: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState(([evt.target.name] = evt.target.value))
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.setState({
      firstName: '',
      lastName: '',
      address: '',
      street: '',
      zipcode: '',
      city: '',
      state: '',
      phone: 0,
      country: ''
    })
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={this.handleChange}
            />
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="street"
              placeholder="Street"
              onChange={this.handleChange}
            />
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              onChange={this.handleChange}
            />
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="City"
              onChange={this.handleChange}
            />
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="state"
              placeholder="State"
              onChange={this.handleChange}
            />
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={this.handleChange}
            />
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="contry"
              placeholder="Country"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CartCheckoutForm)
