import { combineReducers } from 'redux';
import counter from './counter';
import todos from './totos';

const rootReducer = combineReducers({
  counter,
  todos,
});

// Provider, useSelector, useDispatch

export default rootReducer;
