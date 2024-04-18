import { Link } from 'react-router-dom';
import Tetris from '../../../Icons/Tetris';
import Snake from '../../../Icons/Snake';
import Bomb from '../../../Icons/Bomb';
import './Games.scss';

const games = [
  {
    title: <span className='gs-title'>TETRIS</span>,
    icon: <Tetris className='gs-icon' />,
    level: 'L3',
    link: 'gamepage/tetris',
  },
  {
    title: <span className='gs-title'>SNAKE</span>,
    icon: <Snake className='gs-icon' />,
    level: 'L1',
    link: 'gamepage/snake',
  },
  {
    title: (
      <span className='gs-title gs-long-title'>
        <span>MINE</span>
        <span>SWEEPER</span>
      </span>
    ),
    icon: <Bomb className='gs-icon' />,
    level: 'L3',
    link: 'gamepage/minesweeper',
    inDev: true,
  },
];

const Games = () => {
  return (
    <div className='gs-main'>
      {games.map((game) => {
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
