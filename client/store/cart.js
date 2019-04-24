import axios from 'axios'

//ACTION TYPES
const GOT_CART_ITEMS = 'GOT_CART_ITEMS'
const ADDED_TO_CART = 'ADDED_TO_CART'

//ACTION CREATOR

const gotCartItems = items => ({
  type: GOT_CART_ITEMS,
  items
})

const addedToCart = newCartData => ({
  type: ADDED_TO_CART,
  newCartData
})

let initialState = []

//THUNKS
export const fetchCartItems = userId => async dispatch => {
  try {
    if (userId) {
      const {data} = await axios.get(`/api/orders/cart/${userId}`)
      dispatch(gotCartItems(data))
    }
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = (item, cart, userId, quantity) => async dispatch => {
  try {
    if (userId) {
      // axios routes
      let newCartData = []
      if (cart.length === 0) {
        newCartData = await axios.post(`api/orders/${userId}/cart`, {
          productId: item.id,
          quantity: 1
        })
      } else if (!cart.includes(item)) {
        newCartData = await axios.post(`api/orders/${userId}/cart`, {
          productId: item.id,
          quantity: 1
        })
      } else if (cart.includes(item)) {
        newCartData = await axios.put(`api/orders/${userId}/cart/${orderId}`, {
          productId: item.id,
          quantity: quantity++
        })
      }
      dispatch(addedToCart(newCartData))
    } else {
      //localStorage
      let itemsArray = localStorage.getItem('items')
        ? JSON.parse(localStorage.getItem('items'))
        : []

      itemsArray.push(item)

      localStorage.setItem('items', JSON.stringify(itemsArray))

      dispatch(addedToCart(item))
    }
  } catch (error) {
    console.error(error)
  }
}

//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case GOT_CART_ITEMS:
      return action.items
    case ADDED_TO_CART:
      return [...state, action.newCartData]
    default:
      return state
  }
}
