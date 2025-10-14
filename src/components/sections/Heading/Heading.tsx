import classNames from 'classnames';

import HeadingsIcon from '@svg/global/heading-icon.svg?react';

import styles from './style.module.css';

const Heading = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <h2 className={classNames(styles['h-heading-wrapper'], className)}>
      <HeadingsIcon />
      <span className={styles['h-heading']}>{title}</span>
    </h2>
  );
};

export default Heading;
