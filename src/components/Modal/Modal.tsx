import { RemoveScrollBar } from 'react-remove-scroll-bar';
import { zeroRightClassName } from 'react-remove-scroll-bar';
import classNames from 'classnames';

import Ticker from '@components/Ticker';

import ArrowCircleRight from '@svg/global/arrow-circle-right.svg?react';

import './Modal.scss';

const Modal = ({
  children,
  toggleModal,
  setToggleModal,
}: {
  children: React.ReactNode;
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
            onClick={() => setToggleModal(false)}
          >
            <ArrowCircleRight width={70} height={70} className='modal-close-svg' />
          </button>
        </div>
        <div className='modal-game-wrapper'>{children}</div>
        <Ticker textOne='GAME' textTwo='LOADED' additionalClasses='modal-ticker' />
      </div>

      {toggleModal && <RemoveScrollBar />}
    </>
  );
};

export default Modal;
