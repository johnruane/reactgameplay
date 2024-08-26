import classNames from 'classnames';
import Ticker from '@components/Ticker';

import './Modal.scss';

const Modal = ({
  children,
  isActive,
}: {
  children: React.ReactNode;
  isActive: boolean;
}) => {
  return (
    <>
      <div
        className={classNames('overlay-background', {
          ['active']: isActive,
        })}
      ></div>
      <div
        className={classNames('modal-container background-blue', {
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
