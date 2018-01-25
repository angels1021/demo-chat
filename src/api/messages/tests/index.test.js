import omit from 'lodash/omit';
import { createMessage } from '../index';

describe('api/messages createMessage', () => {
  it('should create a message object', () => {
    const user = { username: 'tom', avatar: 'someUrl' };
    const text = 'hello';
    const expectedResult = {
      ...user,
      userId: 1,
      text
    };

    const result = createMessage({ ...user, id: 1 }, text);
    const cleanResult = omit(result, ['id']);
    expect(cleanResult).toEqual(expectedResult);
    expect(result.id.substr(0, 4)).toBe('msg_');
  });
});
