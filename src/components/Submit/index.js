/**
 * Submit component
 *
 * @module components/Submit
 * @component Submit
 * @typicalname Submit
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

const Submit = ({
  children,
  size = '',
  block = false,
  disabled = false
}) => (
  <Button type="submit" color="success" {...{ size, block, disabled }}>{children}</Button>
);

Submit.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['', 'lg', 'sm']), //eslint-disable-line react/require-default-props
  block: PropTypes.bool, //eslint-disable-line react/require-default-props
  disabled: PropTypes.bool //eslint-disable-line react/require-default-props
};

export default Submit;
