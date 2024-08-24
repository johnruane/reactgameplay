import { Link } from 'react-router-dom';
import classNames from 'classnames';

import gameLinks from '@data/games/gameLinks';

import LinkComponent from '@components/LinkComponent';

import RightArrow from '@icons/RightArrow';
import Circle from '@icons/Circle';
import './Games.scss';

const Games = ({ additionalClasses }) => {
  return (
    <div className={classNames('gs-main', additionalClasses)}>
      {gameLinks.map((game, index) => {
        const { link, title, intro, icon, level, inDev = false } = game || {};
        return (
          <Link to={link} className='gs-tile' key={`${title}-${index}`}>
            {title}

            <span className='gs-intro'>{intro}</span>
            <span className='gs-icon'>{icon}</span>

            <div className='gs-level-wrapper'>
              {Array.from({ length: level }).map((_, index) => (
                <Circle key={`${title}-${index}`} />
              ))}
            </div>

            {inDev ? (
              <span className='gs-link'>IN DEVELOPMENT</span>
            ) : (
              <div className='lc-link gs-link'>
                <span>Play game</span>
                <RightArrow className='fluid-img' />
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Games;
