import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(MotionPathPlugin);

const useModalInteractions = () => {
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(() => {
    const modalOverlay = '[data-gsap="modal-overlay"]';
    const modalContainer = '[data-gsap="modal-container"]';
    const modalCloseBtn = '[data-gsap="modal-close-btn"]';

    tl.current = gsap
      .timeline()
      .to(modalOverlay, {
        opacity: 1,
        duration: 0.3,
        ease: 'power1.inOut',
        onStart: () => {
          gsap.set(modalOverlay, { visibility: 'visible' });
        },
        onReverseComplete: () => {
          gsap.set(modalOverlay, { visibility: 'hidden' });
        },
      })
      .to(modalContainer, {
        x: 0,
        duration: 0.3,
        ease: 'power1.inOut',
      })
      .to(modalCloseBtn, {
        x: -100,
        duration: 0.3,
        ease: 'power1.inOut',
      })
      .pause();
  });

  const openModal = useCallback(() => {
    console.log('play');
    tl.current?.play();
  }, [tl]);

  const closeModal = useCallback(() => {
    console.log(tl.current?.progress());
    // tl.current?.reverse(0);
    tl.current?.reverse();
  }, [tl]);

  return { openModal, closeModal, tl };
};

export default useModalInteractions;
