export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_FROM_CART = 'ADD_FROM_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DELETE_FROM_CART = 'DELETE_FROM_CART';

export const CHECKOUT_REQUEST = 'CHECKOUT_REQUEST';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

export function addToCart(productId) {
  return {
    type: ADD_TO_CART,
    productId
  };
}

export function removeFromCart(productId) {
  return {
    type: REMOVE_FROM_CART,
    productId
  };
}

export function addFromCart(productId) {
  return {
    type: ADD_FROM_CART,
    productId
  };
}

export function deleteFromCart(productId) {
  return {
    type: DELETE_FROM_CART,
    productId
  };
}

// export function numFromCart(productId) {
//   return {
//     type: GET_CART_QUANLITY,
//     productId
//   };
// }

export function checkout() {
  return {
    type: CHECKOUT_REQUEST
  };
}

export function checkoutSuccess(cart) {
  return {
    type: CHECKOUT_SUCCESS,
    cart
  };
}

export function checkoutFailure(error) {
  return {
    type: CHECKOUT_FAILURE,
    error
  };
}
