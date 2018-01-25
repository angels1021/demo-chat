/**
 * Chat component
 *
 * @module components/Chat
 * @component Chat
 * @typicalname Chat
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postMessage, subscribeToMessages } from '../../utils/socket';
import { addMessage } from '../../api/messages/actions';
import { createMessage } from '../../api/messages';
import MessageView from '../../components/MessageView/index';
import MessageForm from '../../components/MessageForm/index';
import AppHeader from '../../components/AppHeader';
import FlexBox from '../../components/FlexBox/index';
import './Chat.css';

class Chat extends Component {

  componentWillMount() {
    subscribeToMessages((message) => {
      this.props.loadMessage(message);
    });
  }

  postChatMessage = (text) => {
    const { user } = this.props;
    const message = createMessage(user, text);
    postMessage(message);
  };

  render() {
    const { messages, user } = this.props;
    return (
      <div className="chat-app">
        <FlexBox align="stretch" direction="column" className="w-100 h-100" >
          <AppHeader />
          <MessageView messages={messages} userId={user.id} />
          <MessageForm onSubmit={this.postChatMessage} />
        </FlexBox>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  loadMessage: (message) => dispatch(addMessage(message))
});

Chat.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })).isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    avatar: PropTypes.string
  }).isRequired,
  loadMessage: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
