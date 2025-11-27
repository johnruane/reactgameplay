import { useMemo } from 'react';

import { motion } from 'motion/react';

import styles from './styles.module.css';

const randomDelays = () =>
  Array.from({ length: 11 }, () => 0.2 + Math.random() * 0.45);

const Balls = () => {
  const delays = useMemo(randomDelays, []);

  return (
    <div className={styles['tl-pink-ball-wrapper']}>
      {delays.map((delay, index) => (
        <motion.span
          className={styles['tl-pink-ball']}
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.28,
            ease: 'easeOut',
            delay,
          }}
        />
      ))}
    </div>
  );
};

export default Balls;
