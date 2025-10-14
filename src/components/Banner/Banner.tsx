import classNames from 'classnames';

import Spaceship from '@svg/home/spaceship.svg?react';
import Stars from '@svg/home/stars.svg?react';

import styles from './style.module.css';

const Banner = ({ additionalClasses }) => {
  return (
    <div className={classNames('grid', 'background-black', additionalClasses)}>
      <div className={styles['b-wrapper']}>
        <Stars />
        <p className={classNames(styles['b-text'], styles['nice-wrap'])}>
          “Code your way to the stars and beyond with our gaming challenges.”
        </p>
        <div className={classNames(styles['b-spaceship-wrapper'], 'fluid-img')}>
          <Spaceship className={styles['b-spaceship-red']} />
          <Spaceship className={styles['b-spaceship-grey']} />
          <Spaceship className={styles['b-spaceship-orange']} />
          <Spaceship className={styles['b-spaceship-black']} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
