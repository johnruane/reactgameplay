import Tetris from '@icons/Tetris';
import Snake from '@icons/Snake';
import Minesweeper from '@icons/Minesweeper';

const gameLinks = [
  {
    id: 'tetris',
    title: <span className='gs-title'>TETRIS</span>,
    intro: 'The greatest thing to come out of Russian since Dotstevsky.',
    icon: <Tetris className='gs-icon' />,
    level: 3,
    link: 'gamepage/tetris',
  },
  {
    id: 'snake',
    title: <span className='gs-title'>SNAKE</span>,
    intro: "The iconic 90's Nokia phone game everyone played.",
    icon: <Snake className='gs-icon' />,
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
    icon: <Minesweeper className='gs-icon' />,
    level: 3,
    link: 'gamepage/minesweeper',
    inDev: true,
  },
];

export default gameLinks;
