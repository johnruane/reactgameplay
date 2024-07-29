import { Link } from 'react-router-dom';

import ArrowCircleLeft from '@icons/ArrowCircleLeft';
import ArrowCircleRight from '@icons/ArrowCircleRight';

import './NextPrev.scss';
import classNames from 'classnames';

const NextPrev = ({ prev, next, additionalClasses }) => {
  return (
    <div className={classNames('np-wrapper', additionalClasses)}>
      {prev?.id && (
        <Link
          to={'/gamepage/' + prev.id}
          className='np-link-wrapper np-prev'
          key={prev.id}
        >
          <span className='np-title text-uppercase'>{prev?.title}</span>
          <ArrowCircleLeft />
        </Link>
      )}
      {next?.id && (
        <Link
          to={'/gamepage/' + next?.id}
          className='np-link-wrapper np-next'
          key={next?.id}
        >
          <span className='np-title text-uppercase'>{next?.title}</span>
          <ArrowCircleRight />
        </Link>
      )}
    </div>
  );
};

export default NextPrev;
