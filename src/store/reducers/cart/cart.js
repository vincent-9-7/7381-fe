import { combineReducers } from 'redux';
import {
  ADD_TO_CART,
  ADD_FROM_CART,
  REMOVE_FROM_CART,
  DELETE_FROM_CART,
  // GET_CART_QUANLITY,
  CHECKOUT_REQUEST,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILURE
} from '../../actions/cart/cart';

const initialState = {
  checkoutStatus: {
    checkoutPending: false,
    error: null
  },
  quantityById: {}
};

function checkoutStatus(state = initialState.checkoutStatus, action ) {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return {
        checkoutPending: true,
        error: null
      };
    case CHECKOUT_SUCCESS:
      return initialState.checkoutStatus;
    case CHECKOUT_FAILURE:
      return {
        checkoutPending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export function getQuantity(state, productId) {
  return state.quantityById[productId] || 0;
}

function quantityById(state = initialState.quantityById, action) {
  const { productId } = action;
  switch (action.type) {
    case CHECKOUT_SUCCESS:
      return initialState.quantityById;
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1
      };
    case ADD_FROM_CART:
      const qty1 = (state[productId] || 0) + 1;
      const copy1 = {...state};
      if(qty1 > 0) {
        copy1[productId] = qty1;
      } else {
        delete copy1[productId];
      }
      return copy1;
    case REMOVE_FROM_CART:
      const qty2 = (state[productId] || 0) - 1;
      const copy2 = {...state};
      if(qty2 > 0) {
        copy2[productId] = qty2;
      } else {
        delete copy2[productId];
      }
      return copy2;
    case DELETE_FROM_CART:
      const qty3 = 0;
      // const qty3 = (state[productId] || 0) - 1;
      const copy3 = {...state};
      if(qty3 > 0) {
        copy3[productId] = qty3;
      } else {
        delete copy3[productId];
      }
      return copy3;
    default:
      return state;
  }
}

export default combineReducers({
  checkoutStatus,
  quantityById
});


export function getAddedIds(state) {
  console.log(state.quantityById);
  return Object.keys(state.quantityById);
}
