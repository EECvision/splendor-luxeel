import shopActionTypes from './shop.types';


export const setProductName = val => ({
  type: shopActionTypes.SET_PRODUCT_NAME,
  payload: val
})