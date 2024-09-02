import classNames from 'classnames';
import { zeroRightClassName } from 'react-remove-scroll-bar';

import Ticker from '@components/Ticker';

import ArrowCircleRight from '@svg/global/arrow-circle-right.svg?react';

import './Modal.scss';

const Modal = ({
  children,
  isActive,
  closeModal,
}: {
  children: React.ReactNode;
  isActive: boolean;
  closeModal: () => void;
}) => {
  return (
    <>
      <div
        className={classNames('modal-overlay', {
          ['active']: isActive,
        })}
      ></div>

      <div
        className={classNames('modal-container', zeroRightClassName, {
          ['active']: isActive,
        })}
      >
        <div className='modal-close-svg-wrapper'>
          <button
            className='modal-close-btn'
            onClick={() => closeModal()}
            aria-label='Quit game'
          >
            <ArrowCircleRight width={70} height={70} className='modal-close-svg' />
          </button>
        </div>
        <div className='modal-game-wrapper background-blue'>{children}</div>
        <Ticker textOne='GAME' textTwo='LOADED' additionalClasses='modal-ticker' />
      </div>
    </>
  );
};

export default Modal;
