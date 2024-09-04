import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(MotionPathPlugin);

const useModalInteractions = () => {
  const tl = gsap.timeline({ paused: true });

  const modalOverlay = '.gsap-modal-overlay';

  gsap.set(modalOverlay, { opacity: 0, visibility: 'hidden' });

  useGSAP(() => {
    tl.to(modalOverlay, {
      opacity: 1,
      duration: 1.3,
      ease: 'power1.inOut',
      onStart: () => {
        gsap.set(modalOverlay, { visibility: 'visible' });
      },
      onReverseComplete: () => {
        gsap.set(modalOverlay, { visibility: 'hidden' });
      },
    });
  });

  const openModal = () => {
    console.log('play');
    tl.play();
  };

  const closeModal = () => {
    console.log('reverse');
    tl.reverse(0);
  };

  return { openModal, closeModal };
};

export default useModalInteractions;
