import classNames from 'classnames';
import ScrollBar from '@components/ScrollBar';

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
          <div className='modal-wrapper'>
            {children}
            <ScrollBar text='game-loaded' additionalClasses='modal-scrollbar' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
