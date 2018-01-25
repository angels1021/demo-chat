/**
 * ScrollBottom container
 *
 * @module containers/ScrollBottom
 * @component ScrollBottom
 * @typicalname ScrollBottom
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlexBox from '../../components/FlexBox';
import UserImage from '../../components/UserImage';
import MessageBody from '../../components/MessageBody';

class Message extends Component {

  static propTypes = {
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    isSelf: PropTypes.bool.isRequired,
    isLast: PropTypes.bool.isRequired
  };

  componentDidMount() {
    if (!this.props.isLast) return;
    this.scrollIntoView();
  }

  ref = '';

  scrollIntoView = () => {
    this.ref.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    const {
      avatar,
      text,
      username,
      isSelf
    } = this.props;
    return (
      <FlexBox
        className="chat-message my-3"
        direction={(isSelf ? 'row-reverse' : 'row')}
        align={(isSelf ? 'self-end' : 'self-start')}
      >
        <UserImage url={avatar} />
        <MessageBody isSelf={isSelf} username={username} >
          <div ref={(node) => { this.ref = node; }} >
            {text}
          </div>
        </MessageBody>
      </FlexBox>
    );
  }
}

export default Message;
