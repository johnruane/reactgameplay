import { motion } from 'motion/react';

import Shadow from '@svg/global/shadow.svg?react';
import { default as PacmanSvg } from '@svg/home/pacman.svg?react';

const MotionPacmanSvg = motion.create(PacmanSvg);
const MotionShadowSvg = motion.create(Shadow);

const Pacman = () => {
  return (
    <>
      <MotionPacmanSvg
        className="fluid-img"
        animate={{
          y: [0, -20],
        }}
        transition={{
          repeatType: 'reverse',
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      <MotionShadowSvg
        className="fluid-img"
        animate={{
          scaleX: [1, 0.9],
        }}
        transition={{
          repeatType: 'reverse',
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />
    </>
  );
};

export default Pacman;
