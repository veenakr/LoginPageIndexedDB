import { combineReducers } from 'redux';

import authentication from './auth';
import { users } from './userReducers';

const rootReducer = combineReducers({
  authentication,
  users
});

export default rootReducer;