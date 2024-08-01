const tabs = [
  {
    id: 1,
    title: 'How to play',
    content: (
      <ol>
        <li>
          Use the <code>Arrow</code> keys (or <code>d-pad</code> on mobile) to steer your
          snake in different directions.
        </li>
        <li>
          Remember, you can&apos;t make a U-turn. Plan your moves wisely to avoid
          collisions!
        </li>
        <li>
          The Objective of the game is to eat as many pieces of food as possible to grow
          your snake. The longer the snake, the higher the score!
        </li>
        <li>
          Avoid walls and yourself. Crashing into the walls or your own tail means game
          over. Stay sharp!
        </li>
        <li>
          Plan your path and anticipate your moves to avoid running into obstacles or
          getting trapped by your own tail.
        </li>
        <li>
          There&apos;s no definitive end—aim to beat your high score! Every bite brings
          you closer to Snake greatness.
        </li>
      </ol>
    ),
  },
  {
    id: 2,
    title: 'Scoring',
    content: (
      <ol>
        <li>No big scoring system here. One point scored for every food eaten.</li>
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
          <code>Arrays</code> & <code>loops</code> make up most of the utility functions
          as well as storing and accessing a matrix.
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
          Preventing the user from making a U-turn and allowing it to continue in the
          current direction of travel.
        </li>
        <li>
          Generating a new food position on an unoccupied cell. You can&apos;t just use a
          random generator.
        </li>
        <li>Growing the snake seamlessly.</li>
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
            <code>foodBoard</code>
          </li>
          <li>
            <code>foodBoardPosition</code>
          </li>
          <li>
            <code>snakeHeadPosition</code>
          </li>
          <li>
            <code>snakeBody</code>
          </li>
          <li>
            <code>snakeDirection</code>
          </li>
        </ul>
        <ol>
          <li>
            The <code>displayBoard</code> is represented by an <code>Array</code> of
            arrays - a matrix i.e <code>{'[[0, 0],[0, 0]]'}</code> would be a 2 x 2 board.
            This is stored and everytime this is updated the <code>displayBoard</code> is
            redrawn.
            <br />
            <code>foodBoard</code> is a clone of <code>displayBoard</code>, but is just
            there as a utility and to store where on the board the food is.
          </li>
          <li>
            The <code>snake</code> & <code>food</code> are represented in the matrix as
            numbers <code>1</code> & <code>2</code>. Im using <code>[data-value=x]</code>,
            which is set on the HTML elements when we loop over the matrix and render the
            HTML.
          </li>
          <li>
            <code>foodBoardPosition</code> & <code>snakeHeadPosition</code> are two
            objects storing the row & col position of each i.e{' '}
            <code>{'{ r: 5, c: 5 }'}</code>.
          </li>
          <li>
            The <code>snakeBody</code> is represented by an <code>Array</code> of numbers
            i.e <code>{'[1, 2, 4]'}</code>. The numbers represent the direction the body
            takes relative to the previous position. In my case:
            <ul>
              <li>
                <code>1</code> = Down,
              </li>
              <li>
                <code>2</code> = Left,
              </li>
              <li>
                <code>3</code> = Up,
              </li>
              <li>
                <code>4</code> = Right
              </li>
            </ul>
            Starting at <code>snakeHeadPosition</code> we draw the first{' '}
            <code>snake</code> piece using a clone of <code>foodBoard</code>, then looping
            through <code>snakeBody</code> use the values to <code>Add</code> or{' '}
            <code>Subtract</code> from the position to move us through the board in the
            direction taken by the <code>snake</code>.
          </li>
          <li>
            If <code>foodBoardPosition</code> & <code>snakeHeadPosition</code> are ever
            equal, we&apos;ve caught the food so we generate a new{' '}
            <code>foodBoardPosition</code>.
          </li>
          <li>
            Moving the <code>snake</code> is not instant. The <code>snakeDirection</code>{' '}
            will store the user keypress direction and the <code>snake</code> will update
            its direction every interval.
          </li>
          <li>
            When the <code>snake</code> changes direction we need to propogate this
            through the <code>snakeBody</code> <code>Array</code> so that the{' '}
            <code>snakeBody</code> follows the head.
          </li>
        </ol>
        This is obviously a brief description of the game mechanics. Some of the other
        challenges of the game are:
        <ol>
          <li>
            The <code>useInterval</code> hook, see code comments for source.
          </li>
          <li>
            Genrating a <code>foodPosition</code> that is random and is not an occupied
            cell.
          </li>
          <li>
            Growing the <code>snakeBody</code> and making the <code>snakeBody</code>{' '}
            follow the head.
          </li>
          <li>
            Preventing the <code>snake</code> from being directed against itself i.e. in
            the opposite direction it is going.
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
