import { addMessage } from '../actions';
import { ADD_MESSAGE } from '../constants';

describe('api/messages/actions addMessage', () => {
  it('should contains correct type and data', () => {
    const message = {};
    const expectedResult = {
      type: ADD_MESSAGE,
      payload: message
    };

    const result = addMessage(message);

    expect(result).toEqual(expectedResult);
  });
});
