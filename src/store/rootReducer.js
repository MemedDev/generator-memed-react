import { combineReducers } from 'redux';

import appReducer from './app';
import todosReducer from './todos';

const rootReducer = combineReducers({
  global: appReducer,
  todos: todosReducer,
});

export default rootReducer;
