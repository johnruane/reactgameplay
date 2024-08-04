import { Link } from 'react-router-dom';
import classNames from 'classnames';

import gameLinks from '@data/games/gameLinks';

import RightArrow from '@icons/RightArrow';
import Circle from '@icons/Circle';
import './Games.scss';

const Games = ({ additionalClasses }) => {
  return (
    <div className={classNames('gs-main', additionalClasses)}>
      {gameLinks.map((game) => {
        const { link, title, intro, icon, level, inDev = false } = game || {};
        return (
          <Link to={link} className='gs-tile' key={link}>
            {title}

            <span className='gs-intro'>{intro}</span>
            <span className='gs-icon'>{icon}</span>

            <div className='gs-level-wrapper'>
              {Array.from({ length: level }).map(() => (
                <Circle key={title} />
              ))}
            </div>

            <span className='gs-link'>
              {inDev ? (
                'IN DEVELOPMENT'
              ) : (
                <span className='gs-play-link'>
                  PLAY GAME
                  <RightArrow />
                </span>
              )}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Games;
