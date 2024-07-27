import Tetris from '@icons/Tetris';
import Snake from '@icons/Snake';
import Bomb from '@icons/Bomb';

const gameLinks = [
  {
    id: 'tetris',
    title: <span className='gs-title'>TETRIS</span>,
    intro: 'Tetris, the exhilarating 1984 Russian classic.',
    icon: <Tetris className='gs-icon' />,
    level: 3,
    link: 'gamepage/tetris',
  },
  {
    id: 'snake',
    title: <span className='gs-title'>SNAKE</span>,
    intro: 'Snake, the iconic 1997 mobile phone game.',
    icon: <Snake className='gs-icon' />,
    level: 1,
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
    intro: 'Minesweeper, the classic desktop puzzle game.',
    icon: <Bomb className='gs-icon' />,
    level: 3,
    link: 'gamepage/minesweeper',
    inDev: true,
  },
];

export default gameLinks;
