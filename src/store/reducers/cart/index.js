import { combineReducers } from 'redux';
import { ADD_TO_CART } from '../../actions/cart/cart';
import cart, { getQuantity, getAddedIds } from './cart';
import products, { getProduct } from './products';


export function getCart(state) {
  return state.cart;
}

// export function getCheckoutError(state) {
//   return state.cart.checkoutStatus.error;
// }

// export function isCheckoutPending(state) {
//   return state.cart.checkoutStatus.checkoutPending;
// }

export function getTotal(state) {
  
  return getAddedIds(state.cart).reduce((total, _id) =>
    total + getProduct(state.products, _id).price * getQuantity(state.cart, _id),
    0
  ).toFixed(2);
}

// export function getNum(state) {
  
//   return getAddedIds(state.cart).reduce((total, _id) =>
//      getQuantity(state.cart, _id),0
//   );
// }

export function getCartProducts(state) {
  return getAddedIds(state.cart).map(_id => ({
    ...getProduct(state.products, _id),
    shoppingcartQuantity: getQuantity(state.cart, _id)
  }));
}

const shoppingCart = combineReducers({
  cart,
  products
});

export default function root(state, action) {
  if(action.type === ADD_TO_CART && state.products.byId[action.productId].inventory <= 0){
    return state;
  }
  return shoppingCart(state, action);
}
