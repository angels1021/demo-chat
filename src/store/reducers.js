/**
 * @module api/reducer
 * */
import { combineReducers } from 'redux';
import messages from '../api/messages/reducer';
import user from '../api/user/reducer';

export default combineReducers({
  messages,
  user
});
