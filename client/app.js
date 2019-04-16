import React from 'react'
import {Navbar} from './components'
import Routes from './routes'
import {SingleCoffee} from './components/SingleCoffee'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Container>
        <CardColumns>
          <SingleCoffee />
          <SingleCoffee />
          <SingleCoffee />
          <SingleCoffee />
        </CardColumns>
      </Container>
    </div>
  )
}

export default App
