import { prefetch } from './prefetch';

export const PROFILE_IMAGES = [
  'https://spotim-demo-chat-server.herokuapp.com/avatars/001-snorlax.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/002-psyduck.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/003-pikachu.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/004-jigglypuff.png',
  'https://spotim-demo-chat-server.herokuapp.com/avatars/005-bullbasaur.png',
];

export const loadImages = () => prefetch(PROFILE_IMAGES, PROFILE_IMAGES.length);

const getProfileImage = () => {
  const avatarKey = Math.floor(Math.random() * (PROFILE_IMAGES.length - 1));
  return PROFILE_IMAGES[avatarKey];
};

export default getProfileImage;
