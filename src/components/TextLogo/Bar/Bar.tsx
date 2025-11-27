import { motion } from 'motion/react';

import styles from './styles.module.css';

const Bar = () => {
  return (
    <motion.div
      className={styles['tl-bar']}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
    />
  );
};

export default Bar;
