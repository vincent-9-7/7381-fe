import { combineReducers } from 'redux';
import itemslist from './item';
import user from './user';


const rootReducer = combineReducers({

  // itemslist:itemslist, 缩写成下面⬇️
  itemslist,
  user,
  
});
export default rootReducer;