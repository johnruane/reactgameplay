import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(MotionPathPlugin);

const useModalInteractions = () => {
  const [tl, setTl] = useState<gsap.core.Timeline>();
  const { contextSafe } = useGSAP();
  const modalOverlay = '[data-gsap="modal-overlay"]';
  const modalContainer = '[data-gsap="modal-container"]';
  const modalCloseBtn = '[data-gsap="modal-close-btn"]';

  useGSAP(() => {
    console.log('timieline');
    const tl = gsap.timeline();
    gsap.set(modalOverlay, { visibility: 'hidden', opacity: 0 });
    gsap.set(modalContainer, { x: gsap.getProperty(modalContainer, 'width') });
    gsap.set(modalCloseBtn, { x: 100 });
    setTl(tl);
  });

  useEffect(() => {
    console.log(gsap.getProperty(modalContainer, 'width'));
  }, []);

  const toggleModal = contextSafe((action) => {
    tl?.reversed(action === 'close');
    tl
      ?.to(modalOverlay, {
        opacity: 1,
        duration: 0.3,
        ease: 'power1.inOut',
        onStart: () => {
          console.log('start');
          gsap.set(modalOverlay, { visibility: 'visible' });
        },
      })
      .to(modalContainer, {
        x: 0,
        duration: 0.3,
        ease: 'power1.inOut',
      })
      .to(modalCloseBtn, {
        x: -100,
        opacity: modalCloseBtn,
        duration: 0.3,
        ease: 'power1.inOut',
      });
  });

  return { toggleModal };
};

export default useModalInteractions;
