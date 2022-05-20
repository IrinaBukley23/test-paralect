import { combineReducers } from 'redux';
import { repoesReducer } from './reposReducer';
import { userReducer } from './userReducer';

export default combineReducers({
  user: userReducer,
  repo: repoesReducer,
});
