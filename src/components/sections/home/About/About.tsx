import classNames from 'classnames';

import Cherries from '@svg/home/cherries.svg?react';
import Key from '@svg/home/key.svg?react';
import Mushroom from '@svg/home/mushroom.svg?react';

import styles from './style.module.css';

const About = () => {
  return (
    <>
      <div className={styles['ab-text-icon-wrapper']}>
        <div className={styles['ab-text-wrapper']} data-stack="space-default">
          <h2 className={styles['ab-text-heading']}>
            Learning made exciting and interactive
          </h2>
          <p className={styles['ab-text']}>
            At React Gameplay, I believe that learning should be an engaging and
            hands-on experience. That&apos;s why I&apos;ve meticulously curated
            a selection of well-known games, each tailored to cater to different
            skill levels. Get ready to find yourself in a project where fun and
            learning come together.
          </p>
        </div>

        <Cherries className={classNames(styles['ab-svg'], 'fluid-img')} />
      </div>
      <div
        className={classNames(
          styles['ab-text-icon-wrapper'],
          styles['ab-text-icon-wrapper-flip'],
        )}
      >
        <div className={styles['ab-text-wrapper']} data-stack="space-default">
          <h2 className={styles['ab-text-heading']}>
            Guided exploration: Your path to mastery
          </h2>
          <p className={styles['ab-text']}>
            Every game in our collection comes with insights and practical tips
            on fundamental concepts in React and coding archetecture. From
            mastering state management to implementing game mechanics, I&apos;ve
            got your back every step of the way. Together, we&apos;ll navigate
            through the complexities of React & game development with
            confidence.
          </p>
        </div>

        <Mushroom className={classNames(styles['ab-svg'], 'fluid-img')} />
      </div>
      <div className={styles['ab-text-icon-wrapper']}>
        <div className={styles['ab-text-wrapper']} data-stack="space-default">
          <h2 className={styles['ab-text-heading']}>
            Elevate your skills while having fun
          </h2>
          <p className={styles['ab-text']}>
            Are you prepared to level-up your coding expertise? Take your pick
            from our array of games, dive into the code, and let the journey
            begin. Whether you&apos;re here just to play or to code, React
            Gameplay is your destination for a first-rate experience. What you
            do with any of this is up to you.
          </p>
        </div>

        <Key className={classNames(styles['ab-svg'], 'fluid-img')} />
      </div>
    </>
  );
};

export default About;
