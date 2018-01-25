/**
 * AppHeader component
 *
 * @module components/AppHeader
 * @component AppHeader
 * @typicalname AppHeader
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import Logo from '../Logo';
import FlexBox from '../FlexBox';

const AppHeader = () => (
  <FlexBox justify="center" className="mt-3">
    <Logo />
  </FlexBox>
);

export default AppHeader;
