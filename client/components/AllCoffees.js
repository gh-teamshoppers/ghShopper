import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SingleCoffee} from './SingleCoffee'
import CardColumns from 'react-bootstrap/CardColumns'

class AllCoffees extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }
  componentDidMount() {
    //thunk goes here!
  }

  render() {
    return (
      <div>
        <CardColumns>
          {this.state.props.map(coffee => (
            <div key={coffee.id}>
              <SingleCoffee key={coffee.id} />
            </div>
          ))}
        </CardColumns>
      </div>
    )
  }
}

// const mapStateToProps = state => ({
//   coffee: state.coffee
// })

// const mapDispatchToProps = dispatch => ({})

// export default connect(mapStateToProps, mapDispatchToProps)(AllCoffees)
