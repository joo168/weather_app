import { combineReducers } from 'redux';
import REDUCER from './weather';
// import inputREDUCER from './input';

const rootReducer = combineReducers({
  REDUCER,
  // inputREDUCER,
});

export default rootReducer;
