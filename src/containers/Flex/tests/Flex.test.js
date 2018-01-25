/**
 * Test GridFlex HOC Component
 */
/* eslint-disable react/prop-types */
import React from 'react';
import { shallow } from 'enzyme';
import Flex from '../index';

describe('FlexBox HOC Component', () => {
  // arrange
  const childrenNode = () => (<h1>hello</h1>);
  // act
  const renderedComponent = shallow(
    <Flex align="center" justify="center" direction="column" className="otherClass andAnother" >
      {(classes) => (<div className={classes}>{childrenNode}</div>)}
    </Flex>
  );
  it('should contain passed in children', () => {
    // assert
    expect(renderedComponent.contains(childrenNode)).toBe(true);
  });
  it('should add correct align classes', () => {
    expect(renderedComponent.hasClass('align-center')).toBe(true);
    expect(renderedComponent.hasClass('justify-content-center')).toBe(true);
    expect(renderedComponent.hasClass('align-right')).toBe(false);
  });

  it('should have direction class matching the passed in direction prop', () => {
    // assert
    expect(renderedComponent.hasClass('flex-column')).toBe(true);
    expect(renderedComponent.hasClass('flex-row')).toBe(false);
  });

  it('should include any additional classes passed in', () => {
    // assert
    expect(renderedComponent.hasClass('otherClass')).toBe(true);
    expect(renderedComponent.hasClass('andAnother')).toBe(true);
  });
});
