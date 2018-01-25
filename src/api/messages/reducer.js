/**
 * module description
 * @module api/messages/reducer
 * */

import { ADD_MESSAGE } from './constants';

const messagesReducer = (state = [], action = {}) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default messagesReducer;
