import { useState } from 'react';

import classNames from 'classnames';
import { motion } from 'motion/react';

import Shadow from '@svg/global/shadow.svg?react';
import { default as EyesSvg } from '@svg/home/eyes.svg?react';
import { default as PacmanSvg } from '@svg/home/pacman.svg?react';

import styles from './style.module.css';

const MotionPacmanSvg = motion.create(PacmanSvg);
const MotionEyesSvg = motion.create(EyesSvg);
const MotionShadowSvg = motion.create(Shadow);

const getRandomDelay = () => Math.random() * 10;

const Pacman = () => {
  const [blinkDelay, setBlinkDelay] = useState(getRandomDelay);

  return (
    <>
      <motion.div
        className={styles['pacman-wrapper']}
        animate={{
          y: [0, -20],
        }}
        transition={{
          repeatType: 'reverse',
          duration: 1,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      >
        <MotionPacmanSvg
          className={classNames(styles['pacman-body'], 'fluid-img')}
        />
        <MotionEyesSvg
          key={blinkDelay}
          className={classNames(styles['pacman-eyes'], 'fluid-img')}
          animate={{
            scaleY: [1, 0, 1],
          }}
          transition={{
            duration: 0.15,
            delay: blinkDelay,
            times: [0, 0.5, 1],
            ease: 'easeInOut',
          }}
          onAnimationComplete={() => setBlinkDelay(getRandomDelay())}
          style={{ transformOrigin: 'center 50%' }}
        />
      </motion.div>

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
          delay: 0.1,
        }}
      />
    </>
  );
};

export default Pacman;
