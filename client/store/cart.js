import axios from 'axios'

//ACTION TYPES
const GOT_CART_ITEMS = 'GOT_CART_ITEMS'
const ADDED_TO_CART = 'ADDED_TO_CART';

//ACTION CREATOR

const gotCartItems = (orderId, items) => ({
  type: GOT_CART_ITEMS,
  orderId,
  items
})

const addedToCart = (productId) => ({
  type: ADDED_TO_CART,
  productId
})

let initialState = []

//THUNKS
export const fetchCartItems = orderId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/orders/cart/${orderId}`)
    dispatch(gotCartItems(data))
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = (productId) => async (dispatch) => {
  try {
    const {data} = await axios.get(`/api/orders/${productId}/cart`)
    dispatch()
  } catch (err) {
    console.error(err)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_CART_ITEMS:
      return action.items

    default:
      return state
  }
}
