import { motion } from 'motion/react';

import style from './style.module.css';

const SubText = () => {
  return (
    <motion.div
      className={style['tl-logo-sub-text']}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut', delay: 1 }}
    >
      GAMEPLAY
    </motion.div>
  );
};

export default SubText;
