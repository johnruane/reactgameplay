import tabs from './tabs/Tetris';
import TetrisGame from '@components/Games/tetris';

const gamePageData = {
  id: 'tetris',
  title: <>Tetris</>,
  year: '1984',
  complexity: 'Level 3',
  controls: (
    <ol>
      <li>Use the Arrow Keys ⬅ ⬇ ➡ to move the falling piece.</li>
      <li>Press the Spacebar to rotate.</li>
    </ol>
  ),
  intro: (
    <>
      <p>
        In the 1980s, amid the realm of Soviet computer programming, &ldquo;Tetris&ldquo;
        emerged as a masterpiece crafted by Alexey Pajitnov. With its iconic falling
        tetrominoes and the objective of forming solid lines, the game rapidly captivated
        a global audience, transcending platforms from early computers to Nintendo&apos;s
        Game Boy. Tetris not only defined the puzzle genre but also etched its enduring
        legacy in gaming history, showcasing simplicity, ingenuity, and universal appeal.
      </p>
      <p className='lead'>
        As falling blocks became synonymous with gaming, Tetris solidified its status as a
        timeless classic. Its journey from early computers to widespread platforms
        underscores its remarkable adaptability, making it a symbol not only of a bygone
        era but also of the perennial allure of immersive and engaging gameplay.
      </p>
    </>
  ),
  tabs: tabs,
  game: <TetrisGame />,
};

export default gamePageData;
