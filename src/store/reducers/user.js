import actionType from '../actions/actionTypes';
import initialState from '../initialState';

const initialItemState = initialState.user;

function userReducer(state = initialItemState, action) {
  switch (action.type) {
    case actionType.GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.user
      };
    case actionType.GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
    // Buyer REGISTER
    case actionType.BUYER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.BUYER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.user,
      };
    case actionType.BUYER_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    // Seller REGISTER
    case actionType.SELLER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.SELLER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.user,
      };
    case actionType.SELLER_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    // Buyer SIGNIN
    case actionType.BUYER_SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.BUYER_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.user,
      };
    case actionType.BUYER_SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    // Seller SIGNIN
    case actionType.SELLER_SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.SELLER_SIGNIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.user,
      };
    case actionType.SELLER_SIGNIN_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}

export default userReducer;
