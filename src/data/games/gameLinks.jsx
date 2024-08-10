import TetrisHead from '@icons/TetrisHead';
import SnakeHead from '@icons/SnakeHead';
import MineSweeperHead from '@icons/MineSweeperHead';

const gameLinks = [
  {
    id: 'tetris',
    title: <span className='gs-title'>TETRIS</span>,
    intro: 'The greatest thing to come out of Russian since Dotstevsky.',
    icon: <TetrisHead className='gs-icon' />,
    level: 3,
    link: 'gamepage/tetris',
  },
  {
    id: 'snake',
    title: <span className='gs-title'>SNAKE</span>,
    intro: "The iconic 90's Nokia phone game everyone played.",
    icon: <SnakeHead className='gs-icon' />,
    level: 1,
    link: 'gamepage/snake',
  },
  {
    id: 'minesweeper',
    title: (
      <span className='gs-title'>
        <span>MINESWEEPER</span>
      </span>
    ),
    intro: 'The most nerve racking office distraction.',
    icon: <MineSweeperHead className='gs-icon' />,
    level: 3,
    link: 'gamepage/minesweeper',
    inDev: true,
  },
];

export default gameLinks;
