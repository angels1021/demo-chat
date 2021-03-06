/* eslint-disable react/prefer-stateless-function */
/**
 * @module common/containers/flexBox
 * @kind HOC
 *
 * @requires [React](https://facebook.github.io/react/docs/hello-world.html)
 * @requires [classnames](https://www.npmjs.com/package/classnames);
 * @require module:containers/flexBox/gridClasses
 * */

import PropTypes from 'prop-types';
import flexClasses, { flexChildClasses } from './flexClasses';
import './Flex.css';

// small
// mSmall
// medium
// large
// xlarge
// xxlarge

/**
 * base component for creating Flex box components
 */
const Flex = ({
  align = '',
  justify = '',
  direction = '',
  className = '',
  isChild = false,
  children
}) => children((
  isChild
    ? flexChildClasses(align, className)
    : flexClasses(align, justify, direction, className)
));

Flex.propTypes = {
  className: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  direction: PropTypes.oneOf([
    '', 'row', 'row-reverse', 'column', 'column-reverse'
  ]),
  isChild: PropTypes.bool,
  children: PropTypes.func.isRequired
};

export default Flex;
