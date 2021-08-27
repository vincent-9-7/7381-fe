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
        error:action.message
      };

    default:
      return state;
  }
}

export default userReducer;
