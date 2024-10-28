import useAnimateGameIcon from './hooks/useAnimateGameIcon';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { Complexity } from '@components';

import viewNavigate from '@utils/viewNavigate';

import gameLinks from '@data/games/gameLinks';

import ArrowRight from '@svg/global/arrow-right.svg?react';

import './style.scss';

const Games = ({ additionalClasses }) => {
  useAnimateGameIcon();

  const navigate = useNavigate();

  return (
    <div className={classNames('gs-main', additionalClasses)}>
      {gameLinks.map((game, index) => {
        const { link, title, intro, icon, level, inDev = false } = game || {};
        return (
          <button
            onClick={() => viewNavigate({ route: link, navigate })}
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
              <Complexity title={title} count={level} />
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
