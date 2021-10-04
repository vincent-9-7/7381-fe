import { combineReducers } from 'redux';
import itemslist from './item';
import user from './user';
import order from './order';

import cart from './cart/cart';
import products from './cart/products';

const rootReducer = combineReducers({
  // itemslist:itemslist, 缩写成下面⬇️
  // 这些单词都是redux插件里的state展示的名字
  itemslist,
  user,
  cart,
  products,
  order,
});
export default rootReducer;