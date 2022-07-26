import React from 'react';
import './Modal.css';

const Modal = ({ isVisible = false, title, content, onClose, input, text }) => {

    return !isVisible ? null : (
      <div className="modal" onClick={onClose}>
        <div className="modal-dialog" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <span className="modal-close" onClick={onClose}>
              &#10006;
            </span>
            <h3 className="modal-title">{title}</h3>
            <div className='modal-registrated'>
              {text}
            </div>
          </div>
          <div className="modal-body">
            {input}
            <div className="modal-content">{content}</div>
          </div>
        </div>
      </div>
    );
  };

  export default Modal;