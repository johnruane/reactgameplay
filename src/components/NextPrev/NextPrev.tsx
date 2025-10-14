import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import viewNavigate from '@utils/viewNavigate';

import ArrowCircleLeft from '@svg/global/arrow-circle-left.svg?react';
import ArrowCircleRight from '@svg/global/arrow-circle-right.svg?react';

import styles from './style.module.css';

const NextPrev = ({ prev, next, additionalClasses }) => {
  const navigate = useNavigate();

  const { id: prevId, title: prevTitle } = prev || {};
  const { id: nextId, title: nextTitle } = next || {};
  return (
    <div className={classNames(styles['np-wrapper'], additionalClasses)}>
      {prevId && (
        <button
          onClick={() =>
            viewNavigate({
              route: `/gamepage/${prevId}`,
              navigate,
              resetScroll: true,
            })
          }
          className={classNames(styles['np-prev'], 'unset')}
          key={prevId}
        >
          <span className={styles['np-link-wrapper']}>
            <ArrowCircleLeft className="fluid-img" />
            <span className={classNames(styles['np-title'], 'text-uppercase')}>
              {prevTitle}
            </span>
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
          className={classNames(
            styles['np-link-wrapper'],
            styles['np-next'],
            'unset',
          )}
          key={nextId}
        >
          <span className={styles['np-link-wrapper']}>
            <span className={classNames(styles['np-title'], 'text-uppercase')}>
              {nextTitle}
            </span>
            <ArrowCircleRight className="fluid-img" />
          </span>
        </button>
      )}
    </div>
  );
};

export default NextPrev;
