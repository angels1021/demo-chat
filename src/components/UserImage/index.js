/**
 * UserImage component
 *
 * @module components/UserImage
 * @component UserImage
 * @typicalname UserImage
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import './UserImage.css';

const UserImage = ({ url }) => (
  <div
    className="text-hide user-image border rounded-circle"
    style={{ backgroundImage: `url(${url})` }}
  />
);

UserImage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default UserImage;
