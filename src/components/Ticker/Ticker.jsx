import classNames from 'classnames';
import './Ticker.scss';

const Ticker = ({ textOne, textTwo, direction = 'LTR', additionalClasses }) => {
  return (
    <div className={classNames(`t-wrapper`, additionalClasses)}>
      <div className={classNames('t-ticker', `ticker-${direction}`)}>
        {Array.from({ length: 16 }).map(() => {
          return (
            <>
              <span key={`${textOne}-${textTwo}`}>
                <span className='t-text-one'>{textOne}</span>
                <span className='t-text-two'>{textTwo}</span>
              </span>
              <span className='t-cirle'></span>
            </>
          );
        })}
      </div>
      <div className={classNames('t-ticker', `ticker-${direction}`)} aria-hidden='true'>
        {Array.from({ length: 16 }).map(() => {
          return (
            <>
              <span key={`${textOne}-${textTwo}`}>
                <span className='t-text-one'>{textOne}</span>
                <span className='t-text-two'>{textTwo}</span>
              </span>
              <span className='t-cirle'></span>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Ticker;
