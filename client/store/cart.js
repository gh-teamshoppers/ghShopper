import axios from 'axios'

//ACTION TYPES
const GOT_CART_ITEMS = 'GOT_CART_ITEMS'
const ADDED_TO_CART = 'ADDED_TO_CART'

//ACTION CREATOR

const gotCartItems = (orderId, items) => ({
  type: GOT_CART_ITEMS,
  orderId,
  items
})

const addedToCart = item => ({
  type: ADDED_TO_CART,
  item
})

let initialState = []

//THUNKS
export const fetchCartItems = userId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/orders/cart/${userId}`)
    dispatch(gotCartItems(data))
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = (userId, productId) => async dispatch => {
  try {
    const {data} = await axios.post(`/api/orders/${userId}/cart`, productId)
    dispatch(addedToCart(data))
  } catch (err) {
    console.error(err)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_CART_ITEMS:
      return action.items
    case ADDED_TO_CART:
      return [...state, action.item]
    default:
      return state
  }
}
