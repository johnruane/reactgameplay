import { RemoveScrollBar } from 'react-remove-scroll-bar';
import classNames from 'classnames';
import { zeroRightClassName } from 'react-remove-scroll-bar';

import Ticker from '@components/Ticker';

import ArrowCircleRight from '@svg/global/arrow-circle-right.svg?react';

import './Modal.scss';
import useModalInteractions from './useModalInteractions';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const { toggleModal } = useModalInteractions();

  return (
    <>
      <div className='modal-overlay' data-gsap='modal-overlay'></div>

      <div
        className={classNames('modal-container', zeroRightClassName)}
        data-gsap='modal-container'
      >
        <div className='modal-close-svg-wrapper' data-gsap='modal-close-btn'>
          <button
            className='modal-close-btn'
            aria-label='Quit game'
            onClick={() => toggleModal('close')}
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
