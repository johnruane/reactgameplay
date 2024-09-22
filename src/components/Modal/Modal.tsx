import classNames from 'classnames';

import Ticker from '@components/Ticker';

import ArrowCircleRight from '@svg/global/arrow-circle-right.svg?react';

import './Modal.scss';

const Modal = ({
  children,
  setToggleModal,
}: {
  children: React.ReactNode;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div className="modal-overlay" data-gsap="modal-overlay"></div>

      <div
        className={classNames('modal-container')}
        data-gsap="modal-container"
      >
        <div className="modal-close-svg-wrapper" data-gsap="modal-close-btn">
          <button
            className="button modal-close-btn"
            aria-label="Quit game"
            onClick={() => setToggleModal(false)}
          >
            <ArrowCircleRight
              width={70}
              height={70}
              className="modal-close-svg"
            />
          </button>
        </div>
        <div className="modal-game-wrapper">{children}</div>
        <Ticker
          textOne="GAME"
          textTwo="LOADED"
          additionalClasses="modal-ticker"
        />
      </div>
    </>
  );
};

export default Modal;
