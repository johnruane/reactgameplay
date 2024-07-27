import { Link } from 'react-router-dom';
import gameLinks from '@data/games/gameLinks';
import Circle from '@icons/Circle';
import './Games.scss';

const Games = () => {
  return (
    <div className='gs-main'>
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

            <span className='gs-link'>{inDev ? 'In Dev' : 'Play Game'}</span>
            {/* <span className='gs-level'>{game.level}</span>  */}
          </Link>
        );
      })}
    </div>
  );
};

export default Games;
