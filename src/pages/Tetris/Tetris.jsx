/* eslint-disable react/prop-types */
import TetrisGame from '../../components/Games/tetris';

export default function Tetris({ title }) {
  return (
    <>
      <h1>
        {title}
        <span>1994</span>
      </h1>
      <div>
        <p>
          In the 1980s, amid the realm of Soviet computer programming,
          &ldquo;Tetris&ldquo; emerged as a masterpiece crafted by Alexey Pajitnov. With
          its iconic falling tetrominoes and the objective of forming solid lines, the
          game rapidly captivated a global audience, transcending platforms from early
          computers to Nintendo&apos;s Game Boy. Tetris not only defined the puzzle genre
          but also etched its enduring legacy in gaming history, showcasing simplicity,
          ingenuity, and universal appeal.
        </p>
        <p className='lead'>
          As falling blocks became synonymous with gaming, Tetris solidified its status as
          a timeless classic. Its journey from early computers to widespread platforms
          underscores its remarkable adaptability, making it a symbol not only of a bygone
          era but also of the perennial allure of immersive and engaging gameplay.
        </p>
      </div>
      <div>
        <div>
          <p>Complexity</p>
          <p>Level 3</p>
        </div>

        <div>
          <p>Controls</p>
          <ol>
            <li>Use the Arrow Keys ⬅ ⬇ ➡ to move the falling piece.</li>
            <li>Press the Spacebar to rotate.</li>
          </ol>
        </div>

        <div>
          <p>How to play</p>
          <ol>
            <li>
              Drop the falling blocks into the game board. Arrange them in horizontal
              lines without any gaps to clear those lines.
            </li>
            <li>
              Use the arrow keys on your keyboard to move the falling tetrominoes left or
              right, rotate them clockwise or counterclockwise, or accelerate their
              descent.
            </li>
            <li>
              Anticipate where each tetromino will land and strategically place them to
              create complete lines. Think ahead to avoid creating gaps that cannot be
              filled.
            </li>
            <li>
              The level of the game will increase every 30 seconds, making the tetrominoes
              fall at a faster rate. As you reach each level the game speed will speed up
              by 10%, so don&apos;t hang about.
            </li>
            <li>
              Clearing lines earns you points, and as you accumulate points, you advance
              to higher levels. With each level increase, the game speed increases, making
              it more challenging.
            </li>
            <li>
              If the stack of tetrominoes reaches the top of the game board, the game
              ends. Keep an eye on the upcoming tetrominoes and plan your moves
              accordingly to prevent the game from ending prematurely.
            </li>
          </ol>
        </div>

        <div>
          <p>Scoring</p>
          <ol>
            <li>Completing a single line earns you 100 points.</li>
            <li>
              If you manage to clear multiple lines simultaneously, your score will be
              multiplied by the number of lines cleared. For example, clearing two lines
              at once will earn you 200 points (100 points per line * 2 lines = 200
              points), and then multiplied by 2, resulting in a total of 400 points.
              Clearing three lines at once will earn you 300 points, multiplied by 3 for a
              total of 900 points, and so on.
            </li>
          </ol>
        </div>

        <div>
          <p>Key concepts</p>
          <ol>
            <li>
              The game makes use of <code>useState</code> & <code>useEffect</code> to
              store game states and react to state updates.
            </li>
            <li>
              <code>eventListeners</code> for keypresses to change direction.
            </li>
            <li>
              <code>Arrays</code> & loops make up most of the utility functions, as well
              as storing and accessing a matrix.
            </li>
            <li>
              Animation is acheived through the Web Animation API. Promises are used to
              provide hooks for callbacks.
            </li>
          </ol>
        </div>

        <div>
          <p>Coding challenges</p>
          <ol>
            <li>
              Breaking the game logic into <code>useEffects</code> will be a challenge.
              There are a lot of steps in the game to write logic for.
            </li>
            <li>
              Rotating a matrix is not as simple as expected. Some shapes do not have an
              obvious centre of rotation.
            </li>
            <li>
              Animating a winning row is difficult. You will have to look at how you are
              rendering the tetrominos in CSS as modifying the board will require resting
              before the next piece drops into play.
            </li>
            <li>
              Collision detection will need to know if the tetromino in play can still be
              moved before the current interval ends.
            </li>
          </ol>
        </div>

        <div>
          <p>Credits:</p>
          <ol>
            <li>
              <code>useInterval</code> custom hook written by Dan Abramov
              https://overreacted.io/making-setinterval-declarative-with-react-hooks/
            </li>
          </ol>
        </div>

        <div>
          <p>Sourcecode:</p>
        </div>
      </div>
      <TetrisGame />
    </>
  );
}
