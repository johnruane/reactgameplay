import classNames from 'classnames';
import './Ticker.scss';

const Ticker = ({
  textOne,
  textTwo,
  numberOfItems,
  direction = 'LTR',
  additionalClasses,
}) => {
  const tickerArray = Array.from({ length: numberOfItems });
  return (
    <div className={classNames(`t-wrapper`, additionalClasses)}>
      <div className={classNames('t-ticker', `ticker-${direction}`)}>
        {tickerArray.map(() => {
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
        {tickerArray.map(() => {
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
