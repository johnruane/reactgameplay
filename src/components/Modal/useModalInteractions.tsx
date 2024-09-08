import { useRef, useState } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(MotionPathPlugin);

const useModalInteractions = ({
  onModalCloseCallback,
}: {
  onModalCloseCallback: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const timeline = useRef<gsap.core.Timeline>();
  const [toggleModal, setToggleModal] = useState(false);

  const modalOverlay = '[data-gsap="modal-overlay"]';
  const modalContainer = '[data-gsap="modal-container"]';
  const modalCloseBtn = '[data-gsap="modal-close-btn"]';

  useGSAP(() => {
    const w = window.innerWidth;
    gsap.set(modalOverlay, { visibility: 'hidden', opacity: 0 });
    gsap.set(modalContainer, {
      x: w <= 425 ? gsap.getProperty(modalContainer, 'width') : '100vw',
    });
    gsap.set(modalCloseBtn, { x: 100 });
    timeline.current = gsap.timeline({ paused: true });
  }, []);

  useGSAP(() => {
    const inReverse = timeline.current?.reversed();
    timeline.current
      ?.to(
        modalOverlay,
        {
          opacity: 1,
          duration: 0.35,
          ease: 'power2.inOut',
          onStart: () => {
            gsap.set(modalOverlay, { visibility: 'visible' });
          },
          onReverseComplete: () => {
            onModalCloseCallback((prev) => prev + 1);
            gsap.set(modalOverlay, { visibility: 'hidden' });
          },
        },
        0
      )
      .to(
        modalContainer,
        {
          x: 0,
          duration: inReverse ? 0.25 : 0.35,
          ease: inReverse ? 'power2.inOut' : 'power1.inOut',
        },
        0
      )
      .to(
        modalCloseBtn,
        {
          x: -100,
          opacity: modalCloseBtn,
          duration: inReverse ? 0.15 : 0.6,
          ease: 'elastic.inOut(1,1)',
        },
        0.1
      );
  });

  useGSAP(() => {
    if (toggleModal) {
      timeline.current?.play();
    } else {
      timeline.current?.reverse();
    }
  }, [toggleModal]);

  return { toggleModal, setToggleModal };
};

export default useModalInteractions;
