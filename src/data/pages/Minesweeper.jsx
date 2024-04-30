import tabs from './tabs/Tetris';
import TetrisGame from '@components/Games/tetris';

const gamePageData = {
  id: 'minesweeper',
  title: (
    <>
      <span>Mine</span>
      <span>sweeper</span>
    </>
  ),
  year: '1984',
  complexity: 'Level 3',
  controls: (
    <ol>
      <li>Use the Arrow Keys ⬅ ⬇ ➡ to move the falling piece.</li>
      <li>Press the Spacebar to rotate.</li>
    </ol>
  ),
  intro: <></>,
  tabs: tabs,
  game: <></>,
};

export default gamePageData;
