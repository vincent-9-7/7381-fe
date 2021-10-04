import actionType from '../actions/actionTypes';
import initialState from '../initialState';

// const initialState = {
//   loading: false,
//   updateing: false,
//   loadingNum: 1,
//   error: null,
//   payment: false,
//   order: {
//     result: [],
//     count: 0,
//     page: ''
//   },
//   test:1,
//   row: 0,
//   completeinfo: {
//     info: localStorage.getItem('Order') ?
//       JSON.parse(localStorage.getItem('Order')) : ''
//   },
//   updateData: 'no update'
// }
const initialOrderState = initialState.order;

function orderReducer(state = initialOrderState, action) {
  switch (action.type) {
    case actionType.PAY_ORDER_SUCCESS:
      return {
        ...state,
        payment: true
      };

    case actionType.POST_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        completeinfo: null,
        // payment: false
      };

    case actionType.POST_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        loadingNum: 2,
        order: action.returnMessage, 
        completeinfo: action.returnMessage,
        // payment: false
      };

    case actionType.POST_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        order: [],
        error: action.errorInSaga,
      };

    default:
      return state;
  }
}

export default orderReducer;