import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navbarfunc = ({handleClick, isLoggedIn}) => (
  <div>
    {isLoggedIn ? (
      <div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/home">Expresso.js</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* The navbar will show these links after you log in */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/">Home</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/all-coffee">Our Coffee</Link>
              <Link to="/cart">Cart</Link>

              <Link to="/" onClick={handleClick}>
                {' '}
                Log Out{' '}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    ) : (
      <div>
        <Navbar bg="light" expand="lg" sticky="top">
          <Navbar.Brand href="/">Expresso.js</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" onClick={handleClick}>
                {' '}
                Home{' '}
              </Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/allcoffee">Our Coffee</Link>
              <Link to="/cart">Cart</Link>

              <Link to="/sign-in">Sign In</Link>
              <Link to="/signup">Sign Up</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )}
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbarfunc)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
