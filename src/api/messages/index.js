import uniqueId from 'uniqid';

export const createMessage = ({ id, username, avatar }, text) => ({
  userId: id,
  username,
  avatar,
  text,
  id: uniqueId('msg_')
});
