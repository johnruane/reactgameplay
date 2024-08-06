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

            {inDev ? (
              <span className='gs-link'>IN DEVELOPMENT</span>
            ) : (
              <LinkComponent label='Play game' additionalClasses='gs-link'>
                <RightArrow className='fluid-img' />
              </LinkComponent>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Games;
