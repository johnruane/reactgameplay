import React from 'react';

import classNames from 'classnames';

import styles from './style.module.css';

const Ticker = ({
  textOne,
  textTwo,
  direction = 'LTR',
  additionalClasses,
}: {
  textOne: string;
  textTwo: string;
  direction?: string;
  additionalClasses?: string;
}) => {
  return (
    <div className={classNames(styles['t-wrapper'], additionalClasses)}>
      <div
        className={classNames(
          styles['t-ticker'],
          styles[`ticker-${direction}`],
        )}
      >
        {Array.from({ length: 16 }).map((_, index) => {
          return (
            <React.Fragment key={`${textOne}-${index}`}>
              <span>
                <span className={styles['t-text-one']}>{textOne}</span>
                <span className={styles['t-text-two']}>{textTwo}</span>
              </span>
              <span className={styles['t-cirle']}></span>
            </React.Fragment>
          );
        })}
      </div>
      <div
        className={classNames(
          styles['t-ticker'],
          styles[`ticker-${direction}`],
        )}
        aria-hidden="true"
      >
        {Array.from({ length: 16 }).map((_, index) => {
          return (
            <React.Fragment key={`${textTwo}-${index}`}>
              <span>
                <span className={styles['t-text-one']}>{textOne}</span>
                <span className={styles['t-text-two']}>{textTwo}</span>
              </span>
              <span className={styles['t-cirle']}></span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Ticker;
