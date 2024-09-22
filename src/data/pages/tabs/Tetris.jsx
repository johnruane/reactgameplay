const tabs = [
  {
    id: 1,
    title: 'How to play',
    content: (
      <ol>
        <li>
          Drop the falling blocks into the game board. Arrange them in
          horizontal lines without any gaps. Completed lines disappear, making
          room for new blocks!
        </li>
        <li>
          Use the arrow keys on your keyboard to move the falling tetrominoes
          left or right, rotate them or accelerate their descent.
        </li>
        <li>
          Anticipate where each tetromino will land and strategically place them
          to create complete lines. Look at the next piece preview to plan where
          you&apos;ll place upcoming Tetrominoes.
        </li>
        <li>
          The level of the game increases every 30 seconds making the
          tetrominoes fall at a faster and faster rate, so don&apos;t hang
          about.
        </li>
        <li>
          Earn points by clearing lines. The more lines you clear at once, the
          higher your score!
        </li>
        <li>
          Trigger multipliers for clearing multiple lines at the same time, so
          play strategically in order to reach that high score.
        </li>
        <li>
          Avoid letting the stack reach the top of the screen. If it does,
          it&apos;s game over!
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
          If you manage to clear multiple lines simultaneously, your score will
          be multiplied by the number of lines cleared. For example, two lines
          will earn you the standard 200 points (100 points * 2), plus the 2x
          multiplier you will score a total of 400 points. Clearing three lines
          at once will score 900 points, and so-on.
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
          The game makes use of <code>useState</code> to store the state of the
          gameplay area & <code>useEffect</code> to react to state changes.
        </li>
        <li>
          <code>eventListeners</code> are listening out for keyboard presses to
          move the Tetromino.
        </li>
        <li>
          <code>Arrays</code> & <code>Loops</code> are used to make the
          Tetrominos appear to be moving and are the central key to gamifying
          React.
        </li>
        <li>
          Animation is acheived through the Web Animation API. Promises are used
          to provide hooks for callbacks.
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
          For newbies the key concept to learn is how to gamify React so that
          you can give the appearence of movement to coloured squares on a
          screen. This is detailed in the next section, but understanding that
          these games are built with changing numbers in a <code>Matrix</code>{' '}
          is the biggest concept here.
        </li>
        <li>
          Updating the game on an interval. This is complicated, but the{' '}
          <code>useInterval</code> hook implemented here is one that solves
          problems you will encounter trying to do this with{' '}
          <code>useInterval</code> on it&apos;s own. This was one piece of code
          not written by me, but is freely available. See credits for source.
        </li>
        <li>
          Writing the game logic for Tetris in a linear manner is quite
          straightforward. The challenge arises when implementing this logic
          using React&apos;s useEffect hook. This requires a shift in thinking
          from a sequential approach (&apos;Do this, then this&apos;) to a
          declarative approach (&apos;When this happens, do these things&apos;).
        </li>
        <li>
          Rotating a matrix is not as straightforward as expected. Some shapes
          do not have an obvious centre of rotation, so look at the Tetris
          gameplay in action to figure out how it should behave.
        </li>
        <li>
          Animating a winning row is difficult. You will have to look at how you
          are rendering your <code>Tetrominos</code> in HTML & CSS as modifying
          the DOM will effect any pieces moving into those squares. You&apos;ll
          need to figure out a method that can be rest after animations
          complete, if making such DOM changes.
        </li>
        <li>
          Collision detection: you will need to know if the{' '}
          <code>Tetrominos</code> in play can move in the direction it is
          heading, can be rotated or has reached as far down as possible. These
          all need calculating before you allow the game to continue to the next
          state.
        </li>
        <li>
          Lastly is something that you may encounter depending on your React
          knowledge or how complex you code becomes: stale state or closures.
          These are topics in themselves, so a bit of upfront reading will
          benefit you if you discover the game not behaving as you quite expect.
        </li>
      </ol>
    ),
  },
  {
    id: 5,
    title: 'How to build',
    content: (
      <>
        <ol>
          <li>
            The game is primarily made up of the following matrices stored in
            React state: <code>displayBoard</code>, <code>staticBoard</code>,{' '}
            <code>position</code>, <code>currentTetromino</code> &{' '}
            <code>nextTetromino</code>.
          </li>
          <li>
            There are also states for <code>score</code>, <code>level</code>,{' '}
            <code>speed</code> & <code>delay</code> but these are bonus features
            not required for the main gameplay.
          </li>
          <li>
            The <code>displayBoard</code> is represented as an{' '}
            <code>Array</code> of arrays - a matrix e.g.{' '}
            <code>{'[[0, 0],[0, 0]]'}</code> would be a 2 x 2 board.{' '}
            <code>displayBoard</code> is a transient state containing all the
            static and moving Tetrominos. Whenever this state is updated the
            board you see on screen is redrawn.
          </li>
          <li>
            The <code>staticBoard</code> is all the previously played pieces
            that can no longer move - the static pieces. We use two boards so
            that we can more easily check legal moves and redraw the next move
            in the gameplay. If we only had one board we would need to keep
            removing the moving <code>currentTetromino</code> from the{' '}
            <code>displayBoard</code> matrix, before adding it again in a new
            position. By having a <code>staticBoard</code> without the{' '}
            <code>currentTetromino</code> piece we can use this to generate the
            next gamplay position or as a prop in a utility function that tests
            the next move is legal.
          </li>
          <li>
            <code>position</code> is an object <code>{'{ r: 5, c: 5 }'}</code>{' '}
            storing the row & col position of the <code>currentTetromino</code>.
            When <code>position</code> is updated the <code>displayBoard</code>{' '}
            is redrawn using the updated <code>position</code>,{' '}
            <code>currrentTetromino</code> & <code>staticBoard</code>. This is
            what gives the illusion of movement!
          </li>
          <li>
            <code>currentTetromino</code> & <code>nextTetromino</code> are also
            matrices. I have assigned a different number for the coloured part
            of each <code>Tetromino</code> shape, with zero being the blank
            spaces. This is how I can set different colours for each piece by
            using this value as a <code>[data-value]</code> prop and targetting
            it through CSS.
          </li>
          <li>
            When trying to move a tetromino I use <code>position</code> as the
            starting point for a loop on <code>staticBoard</code> looking to see
            if any matrix point on <code>currentTetromin</code> has a non-zero
            value in the same position as <code>staticBoard</code>. If two
            non-zero values are found at the same indexes during the loop that
            means we have a collision and the move cannot be made.
          </li>
          <li>
            Everytime <code>staticBoard</code> updates we look to see if any row
            has all non-zero values. These row or rows are removed from{' '}
            <code>staticBoard</code> and a fresh all-zero row is added to the
            top, which when seen on-screen simulates the motion of the blocks
            falling downwards.
          </li>
        </ol>
        <p>
          This is obviously a fairly high-level description of the game
          mechanics but these steps should give a good insight into the game
          architecture, states and actions are required to get a good start on
          coding the basic stages of the game cycle. If you get stuck have a
          look at the code repo for some inspiration.
        </p>
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
];

export default tabs;
