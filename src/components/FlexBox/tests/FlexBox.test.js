import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import FlexBox from '../index';

const childrenNode = <h1>hello</h1>;
describe('FlexBox Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FlexBox>{childrenNode}</FlexBox>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  const renderedComponent = shallow(
    <FlexBox
      align="center"
      justify="center"
      direction="column"
      className="otherClass andAnother"
    >
      {childrenNode}
    </FlexBox>
  ).dive();

  it('should return the match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should contain passed in children', () => {
    // assert
    expect(renderedComponent.contains(childrenNode)).toBe(true);
  });

  it('should add flex container classes', () => {
    expect(renderedComponent.hasClass('d-flex')).toBe(true);
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
