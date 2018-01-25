/**
 * module description
 * @module api/user/reducer
 * */
import { CREATE_USER } from './constants';

const initialState = {
  id: '',
  username: '',
  avatar: ''
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_USER: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
