/**
 * MessageText component
 *
 * @module components/MessageText
 * @component MessageText
 * @typicalname MessageText
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './MessageBody.css';

export const positions = {
  right: 'bs-popover-right',
  left: 'bs-popover-left'
};

const MessageBody = ({ children, username, isSelf }) => (
  <div className={cn({
    'message-body': true,
    'my-message': isSelf,
    popover: true,
    [positions.right]: !isSelf,
    [positions.left]: isSelf
  })}>
    <div className="px-2 py-1" >
      <div className="arrow" />
      <h6 className="text-capitalize text-info" >{(isSelf ? 'Me' : username)}</h6>
      <div>{children}</div>
    </div>
  </div>
);

MessageBody.propTypes = {
  children: PropTypes.node.isRequired,
  username: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired
};

export default MessageBody;