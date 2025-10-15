import { useEffect } from 'react';

import { motion, useAnimate } from 'motion/react';

import { default as HeartSvg } from '@svg/global/heart.svg?react';
import Shadow from '@svg/global/shadow.svg?react';

const MotionShadowSvg = motion.create(Shadow);

const Heart = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      'path',
      {
        scale: [1, 1.03, 1],
      },
      {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: 0.5, // Delay before animation starts
      },
    );
  }, [animate]);

  return (
    <>
      <HeartSvg ref={scope} className={'fluid-img'} />
      <MotionShadowSvg
        className="fluid-img"
        animate={{
          scaleX: [1, 1.03, 1],
        }}
        transition={{
          repeatType: 'reverse',
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </>
  );
};

export default Heart;
