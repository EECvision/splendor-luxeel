import cartActionTypes from './cart.types';

export const addItemToCart = item => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload: item
})

export const incrementItemInCart = item => ({
  type: cartActionTypes.INCREMENT_ITEM_IN_CART,
  payload: item
})

export const decrementItemInCart = item => ({
  type: cartActionTypes.DECREMENT_ITEM_IN_CART,
  payload: item
})


export const removeItemFromCart = item => ({
  type: cartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item
})

export const clearCart = () => ({
  type: cartActionTypes.CLEAR_CART
})