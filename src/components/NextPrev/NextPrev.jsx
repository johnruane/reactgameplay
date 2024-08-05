import { Link } from 'react-router-dom';

import ResponsiveSVG from '@components/ResponsiveSVG';

import ArrowCircleLeft from '@icons/ArrowCircleLeft';
import ArrowCircleRight from '@icons/ArrowCircleRight';

import './NextPrev.scss';
import classNames from 'classnames';

const NextPrev = ({ prev, next, additionalClasses }) => {
  const { id: prevId, title: prevTitle } = prev || {};
  const { id: nextId, title: nextTitle } = next || {};
  return (
    <div className={classNames('np-wrapper', additionalClasses)}>
      {prevId && (
        <Link to={'/gamepage/' + prevId} className='np-link-wrapper np-prev' key={prevId}>
          <ResponsiveSVG>
            <ArrowCircleLeft />
          </ResponsiveSVG>
          <span className='np-title text-uppercase'>{prevTitle}</span>
        </Link>
      )}
      {nextId && (
        <Link to={'/gamepage/' + nextId} className='np-link-wrapper np-next' key={nextId}>
          <span className='np-title text-uppercase'>{nextTitle}</span>
          <ResponsiveSVG>
            <ArrowCircleRight />
          </ResponsiveSVG>
        </Link>
      )}
    </div>
  );
};

export default NextPrev;
