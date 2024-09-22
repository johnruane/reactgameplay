import { Link } from 'react-router-dom';

import classNames from 'classnames';

import ArrowCircleLeft from '@svg/global/arrow-circle-left.svg?react';
import ArrowCircleRight from '@svg/global/arrow-circle-right.svg?react';

import './NextPrev.scss';

const NextPrev = ({ prev, next, additionalClasses }) => {
  const { id: prevId, title: prevTitle } = prev || {};
  const { id: nextId, title: nextTitle } = next || {};
  return (
    <div className={classNames('np-wrapper', additionalClasses)}>
      {prevId && (
        <Link
          to={'/gamepage/' + prevId}
          className="np-link-wrapper np-prev"
          key={prevId}
        >
          <ArrowCircleLeft className="fluid-img" />
          <span className="np-title text-uppercase">{prevTitle}</span>
        </Link>
      )}
      {nextId && (
        <Link
          to={'/gamepage/' + nextId}
          className="np-link-wrapper np-next"
          key={nextId}
        >
          <span className="np-title text-uppercase">{nextTitle}</span>
          <ArrowCircleRight className="fluid-img" />
        </Link>
      )}
    </div>
  );
};

export default NextPrev;
