import { memo } from 'react';

import classNames from 'classnames';
import { motion } from 'motion/react';

import style from './style.module.css';

const Cell = memo(function Cell({
  id = '',
  value = 0,
  pos = '',
  rowIndex,
  isAnimating,
  additionalClasses,
  onAnimationComplete,
}: {
  id?: string;
  value?: number;
  pos?: string;
  additionalClasses?: string;
  rowIndex?: string;
  animatingRows?: any;
  isAnimating?: boolean;
  onAnimationComplete?: () => void;
}) {
  return (
    <motion.span
      id={id}
      data-pos={pos}
      className={classNames(style['board-cell'], additionalClasses)}
      data-value={value}
      data-row={rowIndex}
      animate={
        isAnimating
          ? {
              rotate: [0, 360],
            }
          : {}
      }
      transition={{ duration: 0.3 }}
      // onAnimationComplete={onAnimationComplete}
    />
  );
});

export default Cell;
