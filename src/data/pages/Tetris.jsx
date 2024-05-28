import tabs from './tabs/Tetris';
import TetrisGame from '@games/Tetris';

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
        Tetris is one of the most iconic and influential video games of all time, known
        for its simple yet captivating gameplay and widespread cultural impact. The game
        was created by Alexey Pajitnov, a Russian software engineer, in 1984 while he was
        working at the Dorodnitsyn Computing Centre of the Academy of Science of the
        Soviet Union. The name &quot;Tetris&quot; is derived from the Greek numerical
        prefix &quot;tetra-&quot; (meaning four) and tennis, Pajitnov&quot;s favorite
        sport.
      </p>
      <p>
        {' '}
        The gameplay of Tetris is straightforward but highly addictive. Players must
        strategically place falling geometric shapes, called &quot;tetrominoes,&quot; into
        a well to create complete horizontal lines. When a line is completed, it
        disappears, making more room for additional tetrominoes. As the game progresses,
        the tetrominoes fall faster, increasing the challenge and requiring quick reflexes
        and strategic thinking to avoid filling up the well, which would end the game.
      </p>
      <p>
        Culturally, Tetris has had a profound impact since its release. It gained immense
        popularity after being bundled with the Nintendo Game Boy in 1989, helping to
        drive the success of the handheld console. Tetris is often credited with bringing
        puzzle games to the mainstream and has been ported to virtually every gaming
        platform imaginable. Its influence extends beyond gaming into popular culture,
        inspiring music, art, and even psychological studies on the &quot;Tetris
        effect,&quot; where players visualize game patterns in real life. With its
        timeless appeal and wide-reaching influence, Tetris remains a beloved and enduring
        classic in the gaming world.
      </p>
    </>
  ),
  tabs: tabs,
  game: <TetrisGame />,
};

export default gamePageData;
