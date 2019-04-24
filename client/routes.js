import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {Login, Signup, UserHome} from './components'
import {me} from './store'
import SingleCoffeePage from './components/SingleCoffeePage'
import AllCoffees from './components/AllCoffees'
import {HomePage} from './components/Homepage'
import AboutUs from './components/About-us'
import Cart from './components/Cart'
import {CartCheckoutForm} from './components/CartCheckoutForm'
import {onSubmit} from './components/onSubmit'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    const {isLoggedIn} = this.props

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={HomePage} />
        <Route path="/sign-in" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/coffees/:coffeeId" component={SingleCoffeePage} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/allcoffee" component={AllCoffees} />
        <Route path="/cart" component={Cart} />
        <Route path="/checkout" component={CartCheckoutForm} />
        <Route path="/submitted" component={onSubmit} />

        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route exact path="/home" component={UserHome} />
            <Route path="/all-coffee" component={AllCoffees} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
