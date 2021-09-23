import { combineReducers } from 'redux';
import itemslist from './item';
import user from './user';
import cart from './cart/cart';
import products from './cart/products';

const rootReducer = combineReducers({
  // itemslist:itemslist, 缩写成下面⬇️
  itemslist,
  user,
  cart,
  products,
});
export default rootReducer;