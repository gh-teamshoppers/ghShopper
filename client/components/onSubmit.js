import React, {Component} from 'react'
import {connect} from 'react-redux'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export class onSubmit extends Component {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Thanks a latte!</h1>
          <p>You have successfully completed your order!</p>
        </Container>
      </Jumbotron>
    )
  }
}
