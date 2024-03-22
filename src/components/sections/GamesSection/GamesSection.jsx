import { Link } from 'react-router-dom';
import Tetris from '../../../assets/tetris';
import './GamesSection.scss';

const Games = () => {
  return (
    <div className='gs-main'>
      <Link to={'/tetris'} className='gs-tile'>
        <Tetris className='gs-icon' />
        <span className='gs-title'>TETRIS</span>
        <span className='gs-level'>L3</span>
      </Link>
      <div className='col-md-4'>
        <Link to={'/snake'}>SNAKE</Link>
      </div>
      <div className='col-md-4'>
        <Link to={'/snake'}>MINESWEEPER</Link>
      </div>
    </div>
  );
};

export default Games;
