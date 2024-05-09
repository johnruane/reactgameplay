const tabs = [
  {
    id: 1,
    title: 'How to play',
    content: (
      <ol>
        <li>
          Drop the falling blocks into the game board. Arrange them in horizontal lines
          without any gaps to clear those lines.
        </li>
        <li>
          Use the arrow keys on your keyboard to move the falling tetrominoes left or
          right, rotate them clockwise or counterclockwise, or accelerate their descent.
        </li>
        <li>
          Anticipate where each tetromino will land and strategically place them to create
          complete lines. Think ahead to avoid creating gaps that cannot be filled.
        </li>
        <li>
          The level of the game will increase every 30 seconds, making the tetrominoes
          fall at a faster rate. As you reach each level the game speed will speed up by
          10%, so don&apos;t hang about.
        </li>
        <li>
          Clearing lines earns you points, and as you accumulate points, you advance to
          higher levels. With each level increase, the game speed increases, making it
          more challenging.
        </li>
        <li>
          If the stack of tetrominoes reaches the top of the game board, the game ends.
          Keep an eye on the upcoming tetrominoes and plan your moves accordingly to
          prevent the game from ending prematurely.
        </li>
      </ol>
    ),
  },
  {
    id: 2,
    title: 'Scoring',
    content: (
      <ol>
        <li>Completing a single line earns you 100 points.</li>
        <li>
          If you manage to clear multiple lines simultaneously, your score will be
          multiplied by the number of lines cleared. For example, clearing two lines at
          once will earn you 200 points (100 points per line * 2 lines = 200 points), and
          then multiplied by 2, resulting in a total of 400 points. Clearing three lines
          at once will earn you 300 points, multiplied by 3 for a total of 900 points, and
          so on.
        </li>
      </ol>
    ),
  },
  {
    id: 3,
    title: 'Key concepts',
    content: (
      <ol>
        <li>
          The game makes use of <code>useState</code> & <code>useEffect</code> to store
          game states and react to state updates.
        </li>
        <li>
          <code>eventListeners</code> for keypresses to change direction.
        </li>
        <li>
          <code>Arrays</code> & loops make up most of the utility functions, as well as
          storing and accessing a matrix.
        </li>
        <li>
          Animation is acheived through the Web Animation API. Promises are used to
          provide hooks for callbacks.
        </li>
      </ol>
    ),
  },
  {
    id: 4,
    title: 'Coding challenges',
    content: (
      <ol>
        <li>
          Breaking the game logic into <code>useEffects</code> will be a challenge. There
          are a lot of steps in the game to write logic for.
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
    ),
  },
  {
    id: 5,
    title: 'How to build',
    content: (
      <>
        <p>The game is made up of the following major components:</p>
        <ul>
          <li>
            <code>displayBoard</code>
          </li>
          <li>
            <code>staticBoard</code>
          </li>
          <li>
            <code>position</code>
          </li>
          <li>
            <code>currentTetromino</code>
          </li>
          <li>
            <code>nextTetromino</code>
          </li>
        </ul>
        <p>
          There are various states for <code>score</code>, <code>level</code>,{' '}
          <code>speed</code> & <code>delay</code>
        </p>
        <ol>
          <li>
            The <code>displayBoard</code> is represented by an <code>Array</code> of
            arrays - a matrix i.e <code>{'[[0, 0],[0, 0]]'}</code> would be a 2 x 2 board.
            This is stored and everytime this is updated the <code>displayBoard</code> is
            redrawn.
          </li>
          <li>
            The <code>staticBoard</code> basic purpose is to store all the previously
            played pieces. If we only had one board we would need to keep removing the{' '}
            <code>currentTetromino</code> before moving in a new direction. By having a
            board clean of the current piece we can use this to test moving in a direction
            as well as updating the <code>displayBoard</code> with a new move.
          </li>
          <li>
            <code>position</code> is an object <code>{'{ r: 5, c: 5 }'}</code> storing the
            row & col position of the <code>currentTetromino</code>. When{' '}
            <code>position</code> is updated the <code>displayBoard</code> is redrawn
            using the new <code>position</code>, <code>currrentTetromino</code> &{' '}
            <code>staticBoard</code>..
          </li>
          <li>
            <code>currentTetromino</code> & <code>nextTetromino</code> are an{' '}
            <code>Array</code> of arrays - a matrix i.e <code>{'[[0, 1],[1, 0]]'}</code>.
            Both are randomly generated. The non-zero values in the matrix vary across the
            different tetrominos. This is how we can set different colours for each piece.
            When trying to move a tetromino, we use <code>position</code> to start a loop
            on <code>staticBoard</code> and for each of the <code>currentTetromin</code>{' '}
            values if two non-zero values are found at the same indexes during the loop
            that means we cannot move.
          </li>
          <li>
            Winning rows are tested for everytime the <code>staticBoard</code> updates. We
            simply look at each row in the <code>staticBoard</code> array and if every
            index contains a non-zero value then that is a complete row. The row or rows
            are removed and new rows added to the top of <code>staticBoard</code> to
            simulate the blocks moving downwards.
          </li>
        </ol>
        This is obviously a brief description of the game mechanics. Some of the other
        challenges of the game are:
        <ol>
          <li>
            The <code>useInterval</code> hook, see code comments for source.
          </li>
          <li>
            Animating completed rows requires delays, callbacks and animation Promises in
            order to restore the DOM after the animation is complete. This could be done
            with a package to make slightly easier.
          </li>
          <li>
            Writing the game logic in a functional way is a lot harder than class-based.
            The use of useEffects needs to be carefully considered as the game logic is
            fairly complex and it is easy to write long winding functions. Thinking in a
            useEffect way takes some trial and error as &apos;stale&apos; state is easy to
            encounter
          </li>
        </ol>
      </>
    ),
  },
  {
    id: 6,
    title: 'Credits',
    content: (
      <ol>
        <li>
          <code>useInterval</code> custom hook written by Dan Abramov
          https://overreacted.io/making-setinterval-declarative-with-react-hooks/
        </li>
      </ol>
    ),
  },
  {
    id: 7,
    title: 'Sourcecode',
    content: <></>,
  },
];

export default tabs;
