import Tetris from '@icons/Tetris';
import Snake from '@icons/Snake';
import Bomb from '@icons/Bomb';

const gameLinks = [
  {
    id: 'tetris',
    title: <span className='gs-title'>TETRIS</span>,
    icon: <Tetris className='gs-icon' />,
    level: 'L3',
    link: 'gamepage/tetris',
  },
  {
    id: 'snake',
    title: <span className='gs-title'>SNAKE</span>,
    icon: <Snake className='gs-icon' />,
    level: 'L1',
    link: 'gamepage/snake',
  },
  {
    id: 'minesweeper',
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

export default gameLinks;
