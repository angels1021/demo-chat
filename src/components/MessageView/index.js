/**
 * MessageView component
 *
 * @module components/MessageView
 * @component MessageView
 * @typicalname MessageView
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import Message from '../../containers/Message';
import FlexBox from '../FlexBox';
import './MessageView.css';

const MessageView = ({ messages = [], userId = '' }) => (
  <FlexBox className="message-view mx-3 mt-3 flex-auto border rounded">
    <Container fluid >
      <ul className="list-unstyled">
        {
          messages.map((msg, k) => (
            <Message
              key={msg.id}
              {...msg}
              isSelf={msg.userId === userId}
              isLast={k === (messages.length - 1)}
            />
          ))
        }
      </ul>
    </Container>
  </FlexBox>
);

MessageView.propTypes = {
  userId: PropTypes.string, // eslint-disable-line react/require-default-props
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })).isRequired,
};

export default MessageView;