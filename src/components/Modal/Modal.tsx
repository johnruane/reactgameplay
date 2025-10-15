import { useRef } from 'react';

import classNames from 'classnames';
import { motion } from 'motion/react';

import { Ticker } from '@components';

import ArrowCircleRight from '@svg/global/arrow-circle-right.svg?react';

import styles from './style.module.css';

const Modal = ({
  children,
  toggleModal,
  setToggleModal,
}: {
  children: React.ReactNode;
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const w = window.innerWidth;
  const modalContainerWidth =
    modalContainerRef.current?.getBoundingClientRect().width;
  const modalContainerX = w <= 425 ? modalContainerWidth : '100vw';

  return (
    <>
      <motion.div
        className={styles['modal-overlay']}
        onClick={() => setToggleModal(false)}
        animate={{
          opacity: toggleModal ? 1 : 0,
          display: toggleModal ? 'block' : 'none',
          visibility: toggleModal ? 'visible' : 'hidden',
        }}
        transition={{
          duration: 0.35,
          ease: [0.25, 0.46, 0.45, 0.94], // power2.inOut equivalent
        }}
      ></motion.div>
      <motion.div
        ref={modalContainerRef}
        className={classNames(styles['modal-container'])}
        initial={{
          x: modalContainerX,
        }}
        animate={{
          x: toggleModal ? 0 : modalContainerX,
        }}
        transition={{
          duration: toggleModal ? 0.35 : 0.25,
          ease: toggleModal
            ? [0.25, 0.1, 0.25, 1] // power1.inOut equivalent
            : [0.25, 0.46, 0.45, 0.94], // power2.inOut equivalent
        }}
      >
        <motion.div
          className={styles['modal-close-svg-wrapper']}
          animate={{
            x: toggleModal ? -100 : 0,
            opacity: toggleModal ? 1 : 0,
          }}
          transition={{
            delay: toggleModal ? 0.1 : 0,
            duration: toggleModal ? 0.6 : 0.15,
            ease: toggleModal
              ? [0.68, -0.55, 0.265, 1.55] // elastic.inOut equivalent
              : [0.25, 0.46, 0.45, 0.94], // power2.inOut equivalent
          }}
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
        </motion.div>

        <div className={styles['modal-game-wrapper']}>{children}</div>
        <Ticker
          textOne="GAME"
          textTwo="LOADED"
          additionalClasses={styles['modal-ticker']}
        />
      </motion.div>
    </>
  );
};

export default Modal;
