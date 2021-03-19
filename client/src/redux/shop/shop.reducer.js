import shopActionTypes from './shop.types';
import SHOP_GROUP_COLLECTION from './shop-group-collection';
import SHOP_ITEM_COLLECTION from './shop-item-collection';

const INITIAL_STATE = {
  groupCollections: SHOP_GROUP_COLLECTION,
  itemCollections: SHOP_ITEM_COLLECTION,
  productName: ''
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopActionTypes.SET_PRODUCT_NAME:
      return {
        ...state,
        productName: action.payload
      }
    default:
      return state;
  }
}

export default shopReducer;