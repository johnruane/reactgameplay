import classNames from 'classnames';

import './Modal.scss';

const Modal = ({ children, isActive }) => {
  return (
    <div
      className={classNames('modal-container background-black', {
        ['active']: isActive,
      })}
    >
      <div className='container'>
        <div className='grid modal-wrapper'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
