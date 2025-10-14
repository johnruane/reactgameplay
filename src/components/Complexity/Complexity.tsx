import CircleFilled from '@svg/global/circle-filled.svg?react';

import styles from './style.module.css';

const Complexity = ({ count, title }: { count: number; title: string }) => {
  return (
    <div className={styles['complexity-wrapper']}>
      {Array.from({ length: count }).map((_, index) => (
        <CircleFilled key={`${title}-${index}`} />
      ))}
    </div>
  );
};

export default Complexity;
