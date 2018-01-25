/**
 * Action creators for the auth api.
 * @module path/to/file/actions
 * @typicalname actions
 * @requires [redux-actions](https://www.npmjs.com/package/redux-actions)
 * */

import { ADD_MESSAGE } from './constants';

/**
 * An action object.
 * @typedef {{type:(string),payload:(object)}} action
 * */

/**
 * @function addMessage
 * @memberOf module:path/to/file/actions
 * @static
 *
 * @returns {action} action object - { type: ADD_MESSAGE, payload: {} }
 */
export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message
});
