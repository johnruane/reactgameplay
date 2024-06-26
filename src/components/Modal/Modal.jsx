import classNames from 'classnames';
import Cross from '@icons/Cross';

import './Modal.scss';

const Modal = ({ children, title, isActive, onCloseCallback }) => {
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
            <button className='modal-close-button' onClick={onCloseCallback}>
              <Cross />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
