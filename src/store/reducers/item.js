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
        error: action.message
      };

    // Get one item
    case actionType.GET_ITEM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        itemDetails: action.items
      };
    case actionType.GET_ITEM_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };

    // Get all fruit
    case actionType.GET_ALLFRUIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_ALLFRUIT_SUCCESS:
      return {
        ...state,
        loading: false,
        itemDetails: action.items
      };
    case actionType.GET_ALLFRUIT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };

    // Get all vegetable
    case actionType.GET_ALLVEGETABLE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_ALLVEGETABLE_SUCCESS:
      return {
        ...state,
        loading: false,
        itemDetails: action.items
      };
    case actionType.GET_ALLVEGETABLE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      };
      case actionType.PSOT_ITEMS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case actionType.PSOT_ITEMS_SUCCESS:
        return {
          ...state,
          loading: false,
          itemDetails: action.items
        };
      case actionType.PSOT_ITEMS_FAILED:
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
