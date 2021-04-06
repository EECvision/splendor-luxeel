import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import shopReducer  from './shop/shop.reducer';
import navReducer from './nav/nav.reducer';
import cartReducer from './cart/cart.reducer';
import userReducer from './user/user.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['shop', 'nav', 'cart']
}

const rootReducer = combineReducers({
  shop: shopReducer,
  nav: navReducer,
  cart: cartReducer,
  user: userReducer
})

export default persistReducer(persistConfig, rootReducer);