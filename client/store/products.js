import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_SINGLE_COFFEE = 'GET_SINGLE_COFFEE'
const UPDATE_SINGLE_COFFEE = 'UPDATE_SINGLE_COFFEE'
const ADD_SINGLE_COFFEE = 'ADD_SINGLE_COFFEE'
const REMOVE_SINGLE_COFFEE = 'REMOVE_SINGLE_COFFEE'
const GET_ALL_COFFEES = 'GET_ALL_COFFEES'
const GETTING_ALL_COFFEES = 'GETTING_ALL_COFFEES'

/**
 * INITIAL STATE
 */
const initialState = {
  coffees: [],
  coffee: {},
  loading: false
}

/**
 * ACTION CREATORS
 */
const gettingCoffees = () => ({type: GETTING_ALL_COFFEES, loading: true})

const gotCoffees = coffees => ({
  type: GET_ALL_COFFEES,
  coffees
})

const gotSingleCoffee = coffee => ({
  type: GET_SINGLE_COFFEE,
  coffee
})

const updateSingleCoffee = coffee => ({
  type: UPDATE_SINGLE_COFFEE,
  coffee
})

const addSingleCoffee = coffee => ({
  type: ADD_SINGLE_COFFEE,
  coffee
})
const deleteSingleCoffee = coffee => ({
  type: REMOVE_SINGLE_COFFEE,
  coffee
})

/**
 * THUNK CREATORS
 */
export const getCoffees = () => async dispatch => {
  try {
    dispatch(gettingCoffees)
    const {data} = await axios.get('/api/products')
    dispatch(gotCoffees(data))
  } catch (err) {
    console.error(err)
  }
}

export const getSingleCoffee = coffee => async dispatch => {
  try {
    dispatch(gettingCoffees)
    const {data} = await axios.get(`/api/products/${coffee.id}`)
    dispatch(gotSingleCoffee(data))
  } catch (err) {
    console.error(err)
  }
}
export const updateCoffee = coffee => async dispatch => {
  try {
    dispatch(gettingCoffees)
    const {data} = await axios.put(`/api/products/${coffee.id}`, coffee)
    dispatch(updateSingleCoffee(data))
  } catch (err) {
    console.error(err)
  }
}

export const addCoffee = coffee => async dispatch => {
  try {
    dispatch(gettingCoffees)
    const {data} = await axios.post(`/api/products/new`, coffee)
    dispatch(addSingleCoffee(data))
  } catch (err) {
    console.error(err)
  }
}

export const deleteCoffee = coffee => async dispatch => {
  try {
    dispatch(gettingCoffees)
    await axios.delete(`/api/products/${coffee.id}`)
    dispatch(deleteSingleCoffee(coffee))
  } catch (err) {
    console.error(err)
  }
}
/**
 * REDUCER
 */
export default function(state = initialState, action) {
  switch (action.type) {
    case GETTING_ALL_COFFEES:
      return {...state, loading: true}
    case GET_ALL_COFFEES:
      return {...state, coffees: action.coffees, loading: false}
    case GET_SINGLE_COFFEE:
      return {...state, coffee: action.coffee, loading: false}
    case UPDATE_SINGLE_COFFEE:
      return {...state, coffee: action.campus, loading: false}
    case ADD_SINGLE_COFFEE:
      return {
        ...state,
        coffees: [...state.coffees, action.coffee],
        loading: false
      }
    case REMOVE_SINGLE_COFFEE: {
      const filteredCoffees = state.coffees.filter(coffee => {
        return coffee.id !== action.coffee.id
      })
      return {...state, coffees: filteredCoffees, loading: false}
    }
    default:
      return state
  }
}
