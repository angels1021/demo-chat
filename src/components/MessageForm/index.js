/**
 * MessageForm component
 *
 * @module components/MessageForm
 * @component MessageForm
 * @typicalname MessageForm
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, InputGroup } from 'reactstrap';
import Submit from '../Submit';
import './MessageForm.css';

const MessageForm = ({ onSubmit }) => {
  let input;
  const SubmitForm = (e) => {
    e.preventDefault();
    if (!input.value) return;
    onSubmit(input.value);
    input.value = '';
  };
  return (
    <div className="message-form">
      <Form className="p-3" onSubmit={SubmitForm} >
        <InputGroup>
          <textarea className="form-control" ref={(node) => { input = node; }} />
          <div className="input-group-append" >
            <Submit>Send</Submit>
          </div>
        </InputGroup>
      </Form>
    </div>
  );
};

MessageForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default MessageForm;