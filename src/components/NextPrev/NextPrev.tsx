import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import viewNavigate from '@utils/viewNavigate';

import ArrowCircleLeft from '@svg/global/arrow-circle-left.svg?react';
import ArrowCircleRight from '@svg/global/arrow-circle-right.svg?react';

import './style.css';

const NextPrev = ({ prev, next, additionalClasses }) => {
  const navigate = useNavigate();

  const { id: prevId, title: prevTitle } = prev || {};
  const { id: nextId, title: nextTitle } = next || {};
  return (
    <div className={classNames('np-wrapper', additionalClasses)}>
      {prevId && (
        <button
          onClick={() =>
            viewNavigate({
              route: `/gamepage/${prevId}`,
              navigate,
              resetScroll: true,
            })
          }
          className="np-prev unset"
          key={prevId}
        >
          <span className="np-link-wrapper">
            <ArrowCircleLeft className="fluid-img" />
            <span className="np-title text-uppercase">{prevTitle}</span>
          </span>
        </button>
      )}
      {nextId && (
        <button
          onClick={() =>
            viewNavigate({
              route: `/gamepage/${nextId}`,
              navigate,
              resetScroll: true,
            })
          }
          className="np-link-wrapper np-next unset"
          key={nextId}
        >
          <span className="np-link-wrapper">
            <span className="np-title text-uppercase">{nextTitle}</span>
            <ArrowCircleRight className="fluid-img" />
          </span>
        </button>
      )}
    </div>
  );
};

export default NextPrev;
