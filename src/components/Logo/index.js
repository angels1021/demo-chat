/**
 * Logo component
 *
 * @module components/Logo
 * @component Logo
 * @typicalname Logo
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import logo from '../../assets/spotim-logo.jpg';
import './Logo.css';

const Logo = () => (
  <div className="logo">
    <img src={logo} alt="logo" width="100%" />
  </div>
);

export default Logo;
