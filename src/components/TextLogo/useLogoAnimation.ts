import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import { setOffScreenUp } from '@utils/AnimationUtils';

gsap.registerPlugin(MotionPathPlugin);

const useLogoAnimation = () => {
  const logoTL = gsap.timeline();
  const ballsTL = gsap.timeline();
  const gameplayTL = gsap.timeline();

  const logoText = '.tl-logo-main-text';
  const pinkBalls = '.tl-pink-ball-wrapper > *';
  const gameplayText = '.tl-logo-sub-text';

  useGSAP(() => {
    logoTL
      .set(logoText, {
        y: (_, t) => {
          return setOffScreenUp(t);
        },
        x: -25,
        transformOrigin: 'top left',
        rotation: -5,
      })
      .to(logoText, {
        duration: 0.15,
        y: 0,
        ease: 'back.out(.5)',
      })
      .to(logoText, {
        duration: 0.1,
        rotation: 0,
        x: 0,
        ease: 'back.out(.5)',
      });

    ballsTL
      .set(pinkBalls, {
        y: (i, t) => {
          return setOffScreenUp(t);
        },
      })
      .to(pinkBalls, {
        stagger: 0.1,
        duration: 0.2,
        y: 0,
        ease: 'back.out(.5)',
      });

    gameplayTL
      .set(gameplayText, {
        opacity: 0,
      })
      .to(gameplayText, {
        opacity: 1,
        duration: 1,
        ease: 'power4.inOut',
      });
  }, []);
};

export default useLogoAnimation;
