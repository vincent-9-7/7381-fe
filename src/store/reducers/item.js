import actionType from '../actions/actionTypes';
import initialState from '../initialState';

const initialItemState = initialState.items;

function itemReducer(state = initialItemState, action) {
  switch (action.type) {
    case actionType.GET_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        itemDetails: action.items
      };
    case actionType.GET_ITEMS_FAILED:
      return {
        ...state,
        loading: false,
        error:action.message
      };

    default:
      return state;
  }
}

export default itemReducer;
