import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(MotionPathPlugin);

const useBouncingHead = () => {
  const location = useLocation();
  const tl = gsap.timeline();

  const bouncingHead = '.bouncing-head';
  const bouncingShadow = '.bouncing-shadow';

  useGSAP(() => {
    tl.to(
      bouncingHead,
      {
        y: '-=30',
        duration: 1,
        repeat: -1,
        yoyo: true,
      },
      0
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
      0
    );
  }, [location]);
};

export default useBouncingHead;
