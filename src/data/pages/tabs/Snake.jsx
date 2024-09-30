const tabs = [
  {
    id: 1,
    title: 'How to play',
    content: (
      <ol>
        <li>
          The Objective of the game is to eat as many pieces of food as possible
          to grow your snake. The longer the snake, the higher the score!
        </li>
        <li>
          Use the <code>Arrow</code> keys (or <code>d-pad</code> on touch
          devices) to steer your snake in different directions.
        </li>
        <li>
          Avoid walls and yourself. Crashing into the walls or your own tail
          means game over. Stay sharp!
        </li>
        <li>
          Remember, you can&apos;t make a U-turn. Plan your moves wisely to
          avoid avoid running into obstacles or getting trapped by your own
          tail!
        </li>

        <li>
          There&apos;s no definitive end aim other than to beat your high score!
        </li>
      </ol>
    ),
  },
  {
    id: 2,
    title: 'Scoring',
    content: (
      <ol>
        <li>One point scored for every food eaten.</li>
      </ol>
    ),
  },
  {
    id: 3,
    title: 'Game logic',
    content: (
      <ol>
        <li>
          The game takes place on a grid of a specified size (e.g. 20x20 cells).
          The snake and food will move around this grid.
        </li>
        <li>
          The snake starts as a small length of connected cells placed somewhere
          on the grid. The snake has a head: the first block, and a tail: the
          rest of the blocks.
        </li>
        <li>
          The snake moves automatically at regular intervals. The direction of
          movement can be controlled by the player using arrow keys up, down,
          left, right. The snake cannot move in the opposite direction of its
          current movement, so if moving right, it cannot move left.
        </li>
        <li>
          On each "tick" of the interval, the snake&apos;s head moves one cell
          in the current direction and the tail follows.
        </li>
        <li>
          A piece of food is randomly placed on the grid. The food must not be
          placed on any cell currently occupied by the snake.
        </li>
        <li>
          When the snake eats food, its length increases by one cell. This is
          done by adding a new block to the tail of the snake without removing
          any of the current blocks. This makes the snake longer while
          continuing to move.
        </li>
        <li>
          After the snake consumes the food, a new piece of food is generated at
          a random location on the grid not occupied by the snake.
        </li>
        <li>
          The game ends if the snake collides with the edge of the board or with
          its own body.
        </li>
        <li>
          If the snake's head moves into any part of its own body i.e. it
          collides with its tail, the game is over.
        </li>
        <li>
          Collision detection is performed on every movement tick, checking if
          the snake's head collides with a wall or itself.
        </li>
        <li>
          As the game progresses and the snake eats more food, the speed of the
          snake can increase making the game more challenging as the snake grows
          longer.
        </li>
        <li>
          The player controls the direction of the snake using the arrow keys .
          The direction can only change once per tick, meaning the player cannot
          queue multiple moves in a single tick, and the snake will only move on
          'tick' and not immediately as directed.
        </li>
      </ol>
    ),
  },
  {
    id: 4,
    title: 'Tips',
    content: (
      <ol>
        <li>
          The key concept to learn is how to gamify React so that you can give
          the appearence of movement to the snake on a screen. This is detailed
          in the next section, but understanding that this game is built with
          changing numbers in a <code>Matrix</code> is the biggest concept here.
        </li>
        <li>
          The snake has to move on an interval. Changes in direction are not
          instant. You will need to prevent the snake from making a u-turn
          whilst also moving it continuously in a direction of travel.
        </li>
        <li>
          Generating a new food position on an unoccupied cell. You can&apos;t
          just use a random generator as you may encounter an occupied square.
        </li>
      </ol>
    ),
  },
  {
    id: 5,
    title: 'Deep dive',
    content: (
      <>
        <ol>
          <li>
            The game is primarily made up of the following matrices stored in
            React state: <code>displayBoard</code>, <code>foodBoard</code>,{' '}
            <code>foodBoardPosition</code>, <code>snakeHeadPosition</code>,{' '}
            <code>snakeBody</code> & <code>snakeDirection</code>.
          </li>
          <li>
            The <code>displayBoard</code> is represented as an{' '}
            <code>Array</code> of arrays - a matrix e.g.{' '}
            <code>{'[[0, 0],[0, 0]]'}</code> would be a 2 x 2 board.{' '}
            <code>displayBoard</code> is a transient state containing the{' '}
            <code>foodBoard</code> & snake. Whenever this state is updated the
            board you see on screen is redrawn.
          </li>
          <li>
            The <code>foodBoard</code> is another board the same as{' '}
            <code>displayBoard</code>, but is just there as a utility to store
            where on the board the food is, as well as being used to redraw the
            snake at a new position.
          </li>
          <li>
            The <code>snake</code> & <code>food</code> are represented in the
            matrix as numbers <code>1</code> & <code>2</code>. I use these
            numbers to set a <code>[data-value=x]</code> on the DOM elements so
            that I can colour the squares using CSS.
          </li>
          <li>
            <code>foodBoardPosition</code> & <code>snakeHeadPosition</code> are
            two objects storing the row & col position of each e.g.{' '}
            <code>{'{ r: 5, c: 5 }'}</code>. Knowing where the <code>food</code>{' '}
            is and where the <code>snakeHeadPosition</code> is means I know when
            a <code>food</code> is caught, and also where to drawn the{' '}
            <code>snakeBody</code> from.
          </li>
          <li>
            The <code>snakeBody</code> is represented by an <code>Array</code>{' '}
            of numbers e.g. <code>{'[1, 2, 4]'}</code>. The numbers represent
            the direction the body takes relative to the previous position. It
            takes a minute to understand, but from the <code>snakeHead</code>{' '}
            position we read the values in <code>snakeBody</code> to know where
            the next body piece should be drawn. I have decided that{' '}
            <code>1 = Down</code>, <code>2 = Left</code>, <code>3 = Up</code> &{' '}
            <code>4 = Right</code>.
          </li>
          <li>
            If <code>foodBoardPosition</code> & <code>snakeHeadPosition</code>{' '}
            are ever equal, we&apos;ve caught the food so we generate a new{' '}
            <code>foodBoardPosition</code>.
          </li>
          <li>
            Moving the <code>snake</code> is not instant. I use{' '}
            <code>snakeDirection</code> to store the direction intention and on
            every interval tick, if the move is legal, the <code>snake</code>{' '}
            will update the <code>displayBoard</code>.
          </li>
          <li>
            When the <code>snake</code> changes direction we need to propogate
            this through the <code>snakeBody</code>. This is done by prepending
            the <code>snakeBody</code> with the value that represents the new
            direction. That value is prepended to the <code>snakeBody</code> on
            every interval, so a <code>snakeBody</code> of{' '}
            <code>{'[1, 1, 1]]'}</code> would become <code>{'[2, 1, 1]]'}</code>
            , then <code>{'[2, 2, 1]]'}</code>, then <code>{'[2, 2, 2]]'}</code>
            .
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
    title: 'Useful links',
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
