/**
 * UserForm component
 *
 * @module components/UserForm
 * @component UserForm
 * @typicalname UserForm
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Modal from '../Modal';
import Submit from '../Submit';
import Logo from '../Logo';

const UserForm = ({ onSubmit, open = false }) => {
  let input;
  const submitForm = (e) => {
    e.preventDefault();
    if (!input.value.trim()) return;
    onSubmit(input.value);
    input.value = '';
  };
  return (
    <Modal open={open}>
      <ModalHeader className="justify-content-center">
        <Logo />
        <div>Enter a user name</div>
      </ModalHeader>
      <Form onSubmit={submitForm} >
        <ModalBody>
          <input
            type="text"
            className="form-control"
            ref={(node) => { input = node; }}
          />
        </ModalBody>
        <ModalFooter className="justify-content-center">
          <Submit size="lg" >Submit</Submit>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

UserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool // eslint-disable-line react/require-default-props
};

export default UserForm;