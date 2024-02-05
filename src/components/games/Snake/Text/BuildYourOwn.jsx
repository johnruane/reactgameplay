export function BuildYourOwn() {
  return (
    <>
      <p className='fw-bold'>Build you own:</p>
      The game is made up of the following major components:
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
          The <code>displayBoard</code> is represented by an <code>Array</code> of arrays
          - a matrix i.e <code>{'[[0, 0],[0, 0]]'}</code> would be a 2 x 2 board. This is
          stored and everytime this is updated the <code>displayBoard</code> is redrawn.
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
          <code>foodBoardPosition</code> & <code>snakeHeadPosition</code> are two objects
          storing the row & col position of each i.e <code>{'{ r: 5, c: 5 }'}</code>.
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
          Starting at <code>snakeHeadPosition</code> we draw the first <code>snake</code>{' '}
          piece using a clone of <code>foodBoard</code>, then looping through{' '}
          <code>snakeBody</code> use the values to <code>Add</code> or{' '}
          <code>Subtract</code> from the position to move us through the board in the
          direction taken by the <code>snake</code>.
        </li>
        <li>
          If <code>foodBoardPosition</code> & <code>snakeHeadPosition</code> are ever
          equal, we've caught the food so we generate a new <code>foodBoardPosition</code>
          .
        </li>
        <li>
          Moving the <code>snake</code> is not instant. The <code>snakeDirection</code>{' '}
          will store the user keypress direction and the <code>snake</code> will update
          its direction every interval.
        </li>
        <li>
          When the <code>snake</code> changes direction we need to propogate this through
          the <code>snakeBody</code> <code>Array</code> so that the <code>snakeBody</code>{' '}
          follows the head.
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
          Growing the <code>snakeBody</code> and making the <code>snakeBody</code> follow
          the head.
        </li>
        <li>
          Preventing the <code>snake</code> from being directed against itself i.e. in the
          opposite direction it is going.
        </li>
      </ol>
    </>
  );
}
