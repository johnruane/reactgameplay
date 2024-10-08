import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MotionPathPlugin);

const useBouncingHead = () => {
  const tl = gsap.timeline();

  const bouncingHead = '.gsap-bouncing .bouncing-head';
  const bouncingShadow = '.gsap-bouncing .bouncing-shadow';

  useGSAP(() => {
    tl.to(
      bouncingHead,
      {
        y: '-=50',
        duration: 1,
        repeat: -1,
        yoyo: true,
      },
      0, // The animation starts at 0 seconds in the timeline
    );

    tl.to(
      bouncingShadow,
      {
        transformOrigin: '50% 50%',
        scaleX: '0.9',
        duration: 1,
        repeat: -1,
        yoyo: true,
      },
      0, // The animation starts at 0 seconds in the timeline
    );
  }, []);
};

export default useBouncingHead;
