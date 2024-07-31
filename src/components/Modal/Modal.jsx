import classNames from 'classnames';

import './Modal.scss';

const Modal = ({ children, isActive }) => {
  return (
    <>
      <div
        className={classNames('overlay-background', {
          ['active']: isActive,
        })}
      ></div>
      <div
        className={classNames('modal-container background-black', {
          ['active']: isActive,
        })}
      >
        <div className='container'>
          <div className='modal-wrapper'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
