import tabs from './tabs/Tetris';
import { motion } from 'motion/react';

import TetrisGame from '@games/Tetris/tetris';

import TetrisHead from '@svg/games/tetris-head.svg?react';

const MotionTetrisHead = motion.create(TetrisHead);

const gamePageData = {
  id: 'tetris',
  niceName: 'Tetris',
  title: <>Tetris</>,
  link: 'https://github.com/johnruane/reactgames/tree/main/games/Tetris',
  icon: MotionTetrisHead,
  year: '1984',
  complexity: 3,
  controls: (
    <ul>
      <li>
        Use the arrow keys <code>Left</code>, <code>Down</code> &{' '}
        <code>Right</code> to move the falling piece.
      </li>
      <li>
        Press the <code>Spacebar</code> to rotate.
      </li>
    </ul>
  ),
  concepts: (
    <ul>
      <li>Matrix Rotation,</li>
      <li>State Machine Pattern,</li>
      <li>Callback Injection / Dependency Inversion,</li>
      <li>Motion animation,</li>
      <li>State coordination,</li>
      <li>
        React hooks: <code>useEffect</code>, <code>useState</code>,{' '}
        <code>useCallback</code>, <code>useRef</code>, <code>forwardRef</code>.
      </li>
    </ul>
  ),
  intro: (
    <>
      <p>
        Tetris is one of the most iconic and influential video games of all
        time, known for its simple yet captivating gameplay and widespread
        cultural impact. The game was created by Alexey Pajitnov, a Russian
        software engineer, in 1984 while he was working at the Dorodnitsyn
        Computing Centre of the Academy of Science of the Soviet Union. The name
        &quot;Tetris&quot; is derived from the Greek numerical prefix
        &quot;tetra-&quot; (meaning four) and tennis, Pajitnov&quot;s favorite
        sport.
      </p>
      <p>
        The gameplay of Tetris is straightforward but highly addictive. Players
        must strategically place falling geometric shapes, called
        &quot;tetrominoes,&quot; into a well to create complete horizontal
        lines. When a line is completed, it disappears, making more room for
        additional tetrominoes. As the game progresses, the tetrominoes fall
        faster, increasing the challenge and requiring quick reflexes and
        strategic thinking to avoid filling up the well, which would end the
        game.
      </p>
      <p>
        Culturally, Tetris has had a profound impact since its release. It
        gained immense popularity after being bundled with the Nintendo Game Boy
        in 1989, helping to drive the success of the handheld console. Tetris is
        often credited with bringing puzzle games to the mainstream and has been
        ported to virtually every gaming platform imaginable. Its influence
        extends beyond gaming into popular culture, inspiring music, art, and
        even psychological studies on the &quot;Tetris effect,&quot; where
        players visualize game patterns in real life. With its timeless appeal
        and wide-reaching influence, Tetris remains a beloved and enduring
        classic in the gaming world.
      </p>
    </>
  ),
  tabs: tabs,
  instructions: (
    <div className="game-instructions">
      <p className="panel-text panel-text-bold">Instructions</p>

      <ul className="panel-text game-list">
        <li>Press PLAY GAME to begin the game.</li>
        <li>Press RESTART to reset the game.</li>
        <li>Press QUIT to return to the gamepage.</li>
        <li className="hide-mobile">
          Use the ARROW keys to move Left, Right or Down.
        </li>
        <li className="hide-mobile">Press SPACE to rotate.</li>
        <li className="hide-desktop">
          Use the D-PAD to move Left, Right or Down.
        </li>
        <li className="hide-desktop">Press A to rotate.</li>
      </ul>
    </div>
  ),
  game: (props) => <TetrisGame {...props} />,
};

export default gamePageData;
