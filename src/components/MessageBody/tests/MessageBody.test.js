import React from 'react';
import { shallow } from 'enzyme';
import MessageBody, { positions } from '../';

const childrenNode = <h1>hello</h1>;
const render = (isSelf = false) => shallow(
  <MessageBody username="tom" isSelf={isSelf} >
    {childrenNode}
  </MessageBody>
);

describe('MessageBody', () => {
  describe('message by other user', () => {
    const renderedComponent = render();

    it('should return the match snapshot', () => {
      expect(renderedComponent).toMatchSnapshot();
    });

    it('should contain passed in children', () => {
      // assert
      expect(renderedComponent.contains(childrenNode)).toBe(true);
    });

    it('should add the correct classes', () => {
      expect(renderedComponent.hasClass(positions.right)).toBe(true);
      expect(renderedComponent.hasClass(positions.left)).toBe(false);
      expect(renderedComponent.hasClass('my-message')).toBe(false);
    });

    it('should print the correct username', () => {
      const username = renderedComponent.find('.text-info').first().text();
      expect(username).toBe('tom');
      expect(username).not.toBe('Me');
    });

  });

  describe('message by the current user', () => {
    const renderedComponent = render(true);

    it('should return the match snapshot', () => {
      expect(renderedComponent).toMatchSnapshot();
    });

    it('should add the correct classes', () => {
      expect(renderedComponent.hasClass(positions.right)).toBe(false);
      expect(renderedComponent.hasClass(positions.left)).toBe(true);
      expect(renderedComponent.hasClass('my-message')).toBe(true);
    });

    it('should print the correct username', () => {
      const username = renderedComponent.find('.text-info').first().text();
      expect(username).not.toBe('tom');
      expect(username).toBe('Me');
    });

  });
});
