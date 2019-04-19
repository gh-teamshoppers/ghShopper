import axios from 'axios';

//ACTION TYPES
const GOT_ORDERS = 'GOT_ORDERS'

//ACTION CREATORS
const gotOrders = orders => ({
  type: GOT_ORDERS,
  orders
})

//INITIAL STATE
const initialState = [];

//THUNKS
const fetchOrders = (orderId) => async dispatch => {
  const { data } = await axios.get(`/api/orders/cart/${orderId}`);
   

}

//REDUCER
