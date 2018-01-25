/**
 * Test MessageForm component
 */

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MessageForm from '../';

const onSubmit = jest.fn();

const setup = () => shallow(<MessageForm onSubmit={onSubmit} />);
const wrapper = setup();

describe('<MessageForm>', () => {
  describe('default', () => {
    it('should render correctly with default options', () => {
      // assert
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('form actions', () => {
    const button = wrapper.find('Submit');

    it('should not fire on an empty input', () => {
      // act
      button.simulate('click');
      // assert
      expect(onSubmit).not.toHaveBeenCalled();
    });

    it('should fire the submit action', () => {
      //  arrange
      const input = wrapper.find('textarea');
      input.simulate('change', { target: { value: 'Hello' } })
      // act
      button.simulate('click');
      // assert
      expect(onSubmit).not.toHaveBeenCalledWith('Hello');
    });
  });

});
