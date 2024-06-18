import classNames from 'classnames';

import './Modal.scss';

const Modal = ({ children, title, isActive }) => {
  return (
    <div
      className={classNames('modal-container background-yellow', {
        ['active']: isActive,
      })}
    >
      <div className='container'>
        <div className='grid'>
          <div className='modal-heading-wrapper'>
            <h2 className='modal-heading text-uppercase'>{title}</h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
