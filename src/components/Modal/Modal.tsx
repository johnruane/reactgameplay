import classNames from 'classnames';
import { motion, Variants } from 'motion/react';

import { Ticker } from '@components';

import ArrowCircleRight from '@svg/global/arrow-circle-right.svg?react';

import styles from './style.module.css';

const overlayVariants: Variants = {
  closed: {
    opacity: 0,
    display: 'none',
    visibility: 'hidden',
    transition: { delay: 0.35, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  open: {
    opacity: 1,
    display: 'block',
    visibility: 'visible',
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants: Variants = {
  closed: {
    x: '120vw',
    transition: { delay: 0.15, duration: 0.25, ease: [0.25, 0.46, 0.35, 0.94] },
  },
  open: {
    x: 0,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const closeButtonVariants: Variants = {
  closed: {
    x: 20,
    opacity: 0,
    transition: { duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  open: {
    x: -100,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.6, ease: [0.68, -0.55, 0.265, 1.55] },
  },
};

const Modal = ({
  children,
  toggleModal,
  setToggleModal,
  onCloseComplete,
}: {
  children: React.ReactNode;
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  onCloseComplete?: () => void;
}) => {
  const handleClose = () => {
    setToggleModal(false);
  };

  const animationState = toggleModal ? 'open' : 'closed';

  return (
    <>
      <motion.div
        className={styles['modal-overlay']}
        onClick={handleClose}
        variants={overlayVariants}
        initial="closed"
        animate={animationState}
      />
      <motion.div
        className={classNames(styles['modal-container'])}
        variants={containerVariants}
        initial="closed"
        animate={animationState}
        onAnimationComplete={() => {
          if (!toggleModal && onCloseComplete) {
            onCloseComplete();
          }
        }}
      >
        <motion.div
          className={styles['modal-close-svg-wrapper']}
          variants={closeButtonVariants}
          animate={animationState}
        >
          <button
            className={classNames('button', styles['modal-close-btn'])}
            aria-label="Quit game"
            onClick={handleClose}
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
