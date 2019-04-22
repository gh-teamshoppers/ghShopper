import React, {Component} from 'react'
import {connect} from 'react-redux'

import CardColumns from 'react-bootstrap/CardColumns'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

import {getCoffees} from '../store/products'
import {SingleCoffeeLocalStorage} from './SingleCoffeeLocalStorage'

class LocalStorage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: '',
      list: []
    }
  }

  componentDidMount() {
    this.props.getCoffees()
    this.hydrateStateWithLocalStorage()
    window.addEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    )
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeunload',
      this.saveStateToLocalStorage.bind(this)
    )
    // saves if component has a chance to unmount
    this.saveStateToLocalStorage()
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key)
        // parse the localStorage string and setState
        try {
          value = JSON.parse(value)
          this.setState({[key]: value})
        } catch (e) {
          // handle empty string
          this.setState({[key]: value})
        }
      }
    }
  }

  saveStateToLocalStorage() {
    for (let key in this.state) {
      localStorage.setItem(key, JSON.stringify(this.state[key]))
    }
  }

  updateInput(key, value) {
    this.setState({[key]: value})
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    }
    const list = [...this.state.list]

    list.push(newItem)

    this.setState({
      list,
      newItem: ''
    })
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list]
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id)

    this.setState({list: updatedList})
  }

  render() {
    const {coffees, loading} = this.props.coffees
    console.log(this.props.coffees)
    return (
      <div>
        <header>
          <h1>Shopping Cart Local Storage</h1>
        </header>

        <div>
          {coffees && !loading ? (
            <Container>
              local storage render
              <CardColumns>
                {coffees.map(coffee => (
                  <div key={coffee.id}>
                    <SingleCoffeeLocalStorage coffee={coffee} />
                  </div>
                ))}
              </CardColumns>
            </Container>
          ) : (
            <h1>still loading!</h1>
          )}
        </div>

        <div
          style={{
            padding: 50,
            textAlign: 'left',
            maxWidth: 500,
            margin: 'auto'
          }}
        >
          Add an item to the list
          <br />
          <input
            type="text"
            placeholder="Type item here"
            value={this.state.newItem}
            onChange={e => this.updateInput('newItem', e.target.value)}
          />
          <button
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            &#43; Add
          </button>
          <br /> <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    Remove
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(LocalStorage)
