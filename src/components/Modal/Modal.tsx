import { RemoveScrollBar } from 'react-remove-scroll-bar';
import classNames from 'classnames';
import { zeroRightClassName } from 'react-remove-scroll-bar';

import useModalInteractions from './useModalInteractions';

import Ticker from '@components/Ticker';

import ArrowCircleRight from '@svg/global/arrow-circle-right.svg?react';

import './Modal.scss';

const Modal = ({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) => {
  return (
    <>
      <div className='modal-overlay gsap-modal-overlay'></div>

      <div className={classNames('modal-container', zeroRightClassName)}>
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

      {/* { && <RemoveScrollBar />} */}
    </>
  );
};

export default Modal;
