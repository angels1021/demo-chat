import messagesReducer from '../reducer';
import { addMessage } from '../actions';

describe('messages reducer', () => {
  let state;
  beforeEach(() => {
    state = messagesReducer();
    expect(state.length).toBe(0);
  });

  it('should return the initial state', () => {
    expect(state).toMatchSnapshot();
  });

  describe('ADD_MESSAGE', () => {
    it('should add the message to the state', () => {
      // arrange
      const message = { text: 'hello' };
      const action = addMessage(message);
      // act
      const result = messagesReducer(state, action);
      // assert
      expect(result.length).toBe(1);
      expect(result[0]).toEqual(message);
    });
  });
});
