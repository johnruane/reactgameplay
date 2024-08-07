import classNames from 'classnames';
import Ticker from '@components/Ticker';

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
            <div className='modal-game-wrapper'>{children}</div>
            <Ticker textOne='GAME' textTwo='LOADED' additionalClasses='modal-scrollbar' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
