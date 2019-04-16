import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navbarfunc = ({handleClick, isLoggedIn}) => (
  // <div>
  //   <h1>BOILERMAKER</h1>
  //   <nav>
  //     {isLoggedIn ? (
  //       <div>
  //         {/* The navbar will show these links after you log in */}
  //         <Link to="/home">Home</Link>
  //         <a href="#" onClick={handleClick}>
  //           Logout
  //         </a>
  //       </div>
  //     ) : (
  //       <div>
  //         {/* The navbar will show these links before you log in */}
  //         <Link to="/login">Login</Link>
  //         <Link to="/signup">Sign Up</Link>
  //       </div>
  //     )}
  //   </nav>
  //   <hr />
  // </div>

  <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand href="#home">Expresso.js</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home" onClick={handleClick}>
          Home
        </Nav.Link>
        <Nav.Link href="#link">About Us</Nav.Link>
        <NavDropdown title="Our Coffee" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Light Roast</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Medium Roast</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Dark Roast</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">All Coffee</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#login">Sign In</Nav.Link>
        <Nav.Link href="#cart">Cart</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
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
