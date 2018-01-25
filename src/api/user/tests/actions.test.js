/**
 * test actions
 **/
import { createUser } from '../actions';
import { CREATE_USER } from '../constants';
import { PROFILE_IMAGES } from '../../../utils/profileImages';

describe('api/user/actions createUser', () => {
  it('should return the correct type and a new user object', () => {
    // act
    const result = createUser('tom');
    // assert
    const { type, payload: { username, avatar, id } } = result;
    expect(type).toBe(CREATE_USER);
    expect(username).toBe('tom');
    expect(PROFILE_IMAGES.indexOf(avatar)).not.toBe(-1);
    expect(id.substr(0, 5)).toBe('user_');
  });
});
