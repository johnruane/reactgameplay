import useAnimateGameIcon from './hooks/useAnimateGameIcon';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { Complexity } from '@components';

import viewNavigate from '@utils/viewNavigate';

import gameLinks from '@data/games/gameLinks';

import ArrowRight from '@svg/global/arrow-right.svg?react';

import styles from './style.module.css';

const Games = ({ additionalClasses }) => {
  useAnimateGameIcon();

  const navigate = useNavigate();

  return (
    <div className={classNames(styles['gs-main'], additionalClasses)}>
      {gameLinks.map((game, index) => {
        const { link, title, intro, icon, level, inDev = false } = game || {};
        return (
          <button
            onClick={() => viewNavigate({ route: link, navigate })}
            className={styles['gs-tile']}
            key={`${title}-${index}`}
            data-gsap="game-tile"
          >
            <span className={styles['gs-title']}>{title}</span>
            <span className={styles['gs-intro']}>{intro}</span>
            <span className={styles['gs-icon']} data-gsap="game-icon">
              {icon}
            </span>

            <div className={styles['gs-level-wrapper']}>
              <Complexity title={title} count={level} />
            </div>

            {inDev ? (
              <span className={styles['gs-link']}>IN DEVELOPMENT</span>
            ) : (
              <div className={classNames(styles['lc-link'], styles['gs-link'])}>
                <span>Go to game</span>
                <ArrowRight className="fluid-img" />
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Games;
