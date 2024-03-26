import { Link } from 'react-router-dom';
import Tetris from '../../icons/Tetris/tetris';
import Snake from '../../icons/Snake/snake';
import Bomb from '../../icons/Bomb/bomb';
import './GamesSection.scss';

const Games = () => {
  return (
    <div className='gs-main'>
      <Link to={'/tetris'} className='gs-tile'>
        <Tetris className='gs-icon' />
        <span className='gs-title'>TETRIS</span>
        <span className='gs-level'>L3</span>
      </Link>
      <Link to={'/snake'} className='gs-tile'>
        <Snake className='gs-icon' />
        <span className='gs-title'>SNAKE</span>
        <span className='gs-level'>L3</span>
      </Link>
      <Link to={'/minesweeper'} className='gs-tile'>
        <Bomb className='gs-icon' />
        <span className='gs-title gs-long-title gs-coming-soon'>
          <span>MINE</span>
          <span>SWEEPER</span>
        </span>
        <span className='gs-level'>L3</span>
      </Link>
    </div>
  );
};

export default Games;
