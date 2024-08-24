import React from 'react';
import classNames from 'classnames';
import './Ticker.scss';

const Ticker = ({ textOne, textTwo, direction = 'LTR', additionalClasses }) => {
  return (
    <div className={classNames(`t-wrapper`, additionalClasses)}>
      <div className={classNames('t-ticker', `ticker-${direction}`)}>
        {Array.from({ length: 16 }).map((_, index) => {
          return (
            <React.Fragment key={`${textOne}-${index}`}>
              <span>
                <span className='t-text-one'>{textOne}</span>
                <span className='t-text-two'>{textTwo}</span>
              </span>
              <span className='t-cirle'></span>
            </React.Fragment>
          );
        })}
      </div>
      <div className={classNames('t-ticker', `ticker-${direction}`)} aria-hidden='true'>
        {Array.from({ length: 16 }).map((_, index) => {
          return (
            <React.Fragment key={`${textTwo}-${index}`}>
              <span>
                <span className='t-text-one'>{textOne}</span>
                <span className='t-text-two'>{textTwo}</span>
              </span>
              <span className='t-cirle'></span>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Ticker;
