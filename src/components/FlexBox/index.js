/**
 * FlexBox component
 *
 * @module components/FlexBox
 * @component FlexBox
 * @typicalname FlexBox
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Flex from '../../containers/Flex';

const FlexBox = ({
  align = '',
  justify = '',
  direction = '',
  className = '',
  children
}) => (
  <Flex {... {
    align,
    justify,
    direction,
    className
  }} >
    {(classes) => (<div className={cn(classes, 'd-flex')}>{children}</div>)}
  </Flex>
);

FlexBox.propTypes = {
  align: PropTypes.string, //eslint-disable-line react/require-default-props
  justify: PropTypes.string, //eslint-disable-line react/require-default-props
  direction: PropTypes.string, //eslint-disable-line react/require-default-props
  className: PropTypes.string, //eslint-disable-line react/require-default-props
  children: PropTypes.node.isRequired
};

export default FlexBox;
