import useAnimateGameIcon from './hooks/useAnimateGameIcon';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import gameLinks from '@data/games/gameLinks';

import ArrowRight from '@svg/global/arrow-right.svg?react';
import CircleFilled from '@svg/global/circle-filled.svg?react';

import './Games.scss';

const Games = ({ additionalClasses }) => {
  useAnimateGameIcon();

  const navigate = useNavigate();

  const viewNavigate = (newRoute) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return navigate(newRoute);
    } else {
      return document.startViewTransition(() => {
        navigate(newRoute);
      });
    }
  };

  return (
    <div className={classNames('gs-main', additionalClasses)}>
      {gameLinks.map((game, index) => {
        const { link, title, intro, icon, level, inDev = false } = game || {};
        return (
          <button
            onClick={() => viewNavigate(link)}
            className="gs-tile"
            key={`${title}-${index}`}
            data-gsap="game-tile"
          >
            {title}

            <span className="gs-intro">{intro}</span>
            <span className="gs-icon" data-gsap="game-icon">
              {icon}
            </span>

            <div className="gs-level-wrapper">
              {Array.from({ length: level }).map((_, index) => (
                <CircleFilled key={`${title}-${index}`} />
              ))}
            </div>

            {inDev ? (
              <span className="gs-link">IN DEVELOPMENT</span>
            ) : (
              <div className="lc-link gs-link">
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
