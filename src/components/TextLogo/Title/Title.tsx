import { motion } from 'motion/react';

import style from './style.module.css';

const Title = () => {
  const childVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
        scale: { type: 'spring', visualDuration: 0.35, bounce: 0.45 },
      },
    },
  };

  return (
    <motion.div
      className={style['title-logo-main-text']}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.08,
            delayChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.35 }}
    >
      <motion.span variants={childVariants}>R</motion.span>
      <motion.span variants={childVariants}>E</motion.span>
      <motion.span variants={childVariants}>A</motion.span>
      <motion.span variants={childVariants}>C</motion.span>
      <motion.span variants={childVariants}>T</motion.span>
    </motion.div>
  );
};

export default Title;
