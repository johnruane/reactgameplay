import { Link } from 'react-router-dom';

import PolygonLeft from '@icons/PolygonLeft';
import PolygonRight from '@icons/PolygonRight';

import './NextPrev.scss';

const NextPrev = ({ prev, next }) => {
  return (
    <div className='np-wrapper'>
      {prev?.id && (
        <Link
          to={'/gamepage/' + prev.id}
          className='np-link-wrapper np-prev'
          key={prev.id}
        >
          <PolygonLeft />
          <div className='np-text-wrapper'>
            <span className='np-label'>Previous</span>
            <span className='np-title text-uppercase'>{prev?.title}</span>
          </div>
        </Link>
      )}
      {next?.id && (
        <Link
          to={'/gamepage/' + next?.id}
          className='np-link-wrapper np-next'
          key={next?.id}
        >
          <PolygonRight />
          <div className='np-text-wrapper'>
            <span className='np-label'>Next</span>
            <span className='np-title text-uppercase'>{next?.title}</span>
          </div>
        </Link>
      )}
    </div>
  );
};

export default NextPrev;
