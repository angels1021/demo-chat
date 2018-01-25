import times from 'lodash/times';
import take from 'lodash/take';
import zip from 'lodash/zip';

const createNode = () => new Image();

export const prefetch = (images, limit = 1) => {
  const imageNodes = times(limit, createNode);
  const imageList = take(images, limit);
  const imageMap = zip(imageNodes, imageList);
  return imageMap.map(([node, image]) => {
    node.src = image.url; //eslint-disable-line no-param-reassign
    return node;
  });
};
