/**
 * test reducer
 **/
import userReducer from '../reducer';
import { createUser } from '../actions';

describe('api/user/reducer', () => {
  let state;
  beforeEach(() => {
    state = userReducer();
  });

  it('should return the initial state', () => {
    expect(state).toMatchSnapshot();
  });

  describe('CREATE_USER', () => {
    it('should set a new user', () => {
      // arrange
      const action = createUser('tom');
      // act
      const result = userReducer(state, action);
      // assert
      expect(result).toEqual(action.payload);
    });
  });
});
