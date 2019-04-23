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
      const {data} = await axios.get('/api/orders/cart')
      dispatch(gotCartItems(data))
    }
  } catch (err) {
    console.error(err)
  }
}

export const addToCart = (item, cart, userId, quantity) => async dispatch => {
  try {
    console.log('hitting addToCart')
    if (userId) {
      // axios routes
      const {data} = await axios.post(`api/orders/${userId}/cart`, {
        productId: item.id,
        quantity: 1
      })
      dispatch(addedToCart(data))
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

  // try {
  //   let orderId = 1
  //   if(orderId){
  //   //   const {data} = await axios.get(`/api/orders/${userId}/cart/${orderId}`)
  //   // console.log('DATA from CART', data)
  //   const updateQty= await axios.put(`'/${userId}/cart/${orderId}`, quantity)
  //   }
  //   if (data) {
  //     data.quantity++
  //     const updated = await axios.put(`/api/orders/${userId}/cart`, data)
  //     dispatch(addedToCart(updated))
  //   } else {
  //     const {data} = await axios.post(`/api/orders/${userId}/cart`, item)
  //     dispatch(addedToCart(data))
  //   }
  // } catch (err) {
  //   console.error(err)
  // }
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
