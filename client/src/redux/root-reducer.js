import { combineReducers } from 'redux';

import shopReducer  from './shop/shop.reducer';
import navReducer from './nav/nav.reducer';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

const rootReducer = combineReducers({
  shop: shopReducer,
  nav: navReducer,
  cart: cartReducer,
  user: userReducer
})

export default rootReducer;