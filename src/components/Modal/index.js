/**
 * Modal component
 *
 * @module components/Modal
 * @component Modal
 * @typicalname Modal
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * @requires [prop-types]{@link https://www.npmjs.com/package/prop-types}
 * */
import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Modal.css';

const Modal = ({ open = false, children }) => (
  <div
    className={
      cn({
        show: open,
        'd-block': open
      }, 'modal', 'fade')
    }
    role="dialog"
  >
    <div className="modal-dialog" role="document" >
      <div className="modal-content">
        {children}
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool // eslint-disable-line react/require-default-props
};

export default Modal;