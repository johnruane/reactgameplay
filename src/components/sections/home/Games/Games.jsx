import { Link } from 'react-router-dom';
import gameLinks from '@data/games/gameLinks';
import './Games.scss';

const Games = () => {
  return (
    <div className='gs-main'>
      {gameLinks.map((game) => {
        return (
          <Link to={game.link} className='gs-tile' key={game.link}>
            {game.inDev && <span className='gs-soon'>Coming soon</span>}
            {game.icon}
            {game.title}
            <span className='gs-level'>{game.level}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Games;
