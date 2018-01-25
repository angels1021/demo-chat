import uniqueId from 'uniqid';
import getProfileImage from '../../utils/profileImages';
import { CREATE_USER } from './constants';

export const createUser = (username) => {
  const id = uniqueId('user_');
  return {
    type: CREATE_USER,
    payload: { id, username, avatar: getProfileImage() }
  };
};
