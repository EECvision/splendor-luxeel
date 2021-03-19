import cartActionTypes from './cart.types';
import {
  addItem,
  decrementItem,
  incrementItem,
  removeItem
} from './cart.utils';

const INITIAL_STATE = {
  cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItem(state.cartItems, action.payload)
      }
    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload)
      }
    case cartActionTypes.INCREMENT_ITEM_IN_CART:
      return {
        ...state,
        cartItems: incrementItem(state.cartItems, action.payload)
      }
    case cartActionTypes.DECREMENT_ITEM_IN_CART:
      return {
        ...state,
        cartItems: decrementItem(state.cartItems, action.payload)
      }
    case cartActionTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      }

    default:
      return state;
  }
}

export default cartReducer;