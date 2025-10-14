import classNames from 'classnames';

import { Ticker } from '@components';

import ArrowCircleRight from '@svg/global/arrow-circle-right.svg?react';

import styles from './style.module.css';

const Modal = ({
  children,
  setToggleModal,
}: {
  children: React.ReactNode;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <div
        className={styles['modal-overlay']}
        data-gsap="modal-overlay"
        onClick={() => setToggleModal(false)}
      ></div>

      <div
        className={classNames(styles['modal-container'])}
        data-gsap="modal-container"
      >
        <div
          className={styles['modal-close-svg-wrapper']}
          data-gsap="modal-close-btn"
        >
          <button
            className={classNames('button', styles['modal-close-btn'])}
            aria-label="Quit game"
            onClick={() => setToggleModal(false)}
          >
            <ArrowCircleRight
              width={70}
              height={70}
              className={styles['modal-close-svg']}
            />
          </button>
        </div>
        <div className={styles['modal-game-wrapper']}>{children}</div>
        <Ticker
          textOne="GAME"
          textTwo="LOADED"
          additionalClasses={styles['modal-ticker']}
        />
      </div>
    </>
  );
};

export default Modal;
