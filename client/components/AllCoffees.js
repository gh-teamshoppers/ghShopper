import React, {Component} from 'react'
import {connect} from 'react-redux'
import SingleCoffee from './SingleCoffee'
import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import {getCoffees} from '../store/products'

class AllCoffees extends Component {
  componentDidMount() {
    this.props.getCoffees()
  }

  render() {
    const {coffees, loading} = this.props.coffees

    return (
      <div>
        {coffees && !loading ? (
          <Container>
            <CardColumns>
              {coffees.map(coffee => (
                <div key={coffee.id}>
                  <SingleCoffee key={coffee.id} coffee={coffee} />
                </div>
              ))}
            </CardColumns>
          </Container>
        ) : (
          <h1>still loading!</h1>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  coffees: state.coffees
})

const mapDispatchToProps = dispatch => ({
  getCoffees: () => dispatch(getCoffees())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllCoffees)
