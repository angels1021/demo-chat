/**
 * @module common/containers/flexBox/flexClasses
 * @typicalname flexClasses
 * */
import buildClasses from './buildClasses';

const gridJustify = [
  'start',
  'end',
  'center',
  'between',
  'around'
];

const gridAlign = [
  'start',
  'end',
  'center',
  'baseline',
  'stretch',
  'self-start',
  'self-end',
  'self-center',
  'self-baseline',
  'self-stretch'
];

const subAlign = [
  'top',
  'bottom',
  'middle',
  'stretch'
];

const gridDirection = ['row', 'row-reverse', 'column', 'column-reverse'];

/**
 * Reduce all classes passed to single array.
 * align and direction classes will be prefixed
 * according to the grid and direction sets.
 *
 * @memberOf module:common/containers/flexBox/flexClasses
 * @static
 * @function buildClasses
 *
 * @param {
 * ''|
 * 'start'|
 * 'end'|
 * 'center'|
 * 'between'|
 * 'around'
 * } align - classes to be prefixed according gridAlign
 * @param {
 * ''|
 * 'start'|
 * 'end'|
 * 'center'|
 * 'baseline'|
 * 'stretch'|
 * 'self-start'|
 * 'self-end'|
 * 'self-center'|
 * 'self-baseline'|
 * 'self-stretch'
 * } justify - classes to be prefixed according gridAlign
 * @param {
 * ''|
 * 'row'|
 * 'row-reverse'|
 * 'column'|
 * 'column-reverse'
 * } direction - classes to be prefixed according gridDirection
 * @param {...string} classes - any additional classes
 * @return {Array}
 */
const flexClasses = (align, justify, direction, ...classes) => buildClasses(
  {
    values: align,
    dictionary: gridAlign,
    template: (val) => `align-${val}`
  },
  {
    values: justify,
    dictionary: gridJustify,
    template: (val) => `justify-content-${val}`
  },
  {
    values: direction,
    dictionary: gridDirection,
    template: (val) => `flex-${val}`
  },
  {
    values: classes
  }
);

/**
 * Similar to buildClasses but allows only child alignment.
 * and does not accept direction.
 *\
 * @memberOf module:common/containers/flexBox/flexClasses
 * @static
 * @function flexChildClasses
 * @param {'top'|'bottom'|'middle'|'stretch'} align - valid flex children alignment option
 * @param {...string} classes
 */
export const flexChildClasses = (align, ...classes) => buildClasses(
  {
    values: align,
    dictionary: subAlign,
    template: (val) => `align-self-${val}`
  },
  {
    values: classes
  }
);

export default flexClasses;
