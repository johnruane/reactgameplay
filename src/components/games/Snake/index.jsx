import { useState, useEffect } from 'react';

/* Components */
import Board from './Board';
import Panel from './Panel';

/* Utils */
import { addSnakeToBoard, growSnake, getRandomEmptyBoardPosition } from './lib/utils';
import { deepClone, createBoard } from '../utils';

/* Hooks */
import { useInterval } from './hooks/useInterval';

const SNAKE_DIRECTIONS = {
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_LEFT: 'ArrowLeft',
};

const FOOD_VALUE = 2;

const Snake = () => {
  const emptyBoard = createBoard(20, 20, 0);
  const initialFoodBoard = deepClone(emptyBoard);
  initialFoodBoard[5][5] = FOOD_VALUE;

  const [displayBoard, setDisplayBoard] = useState(deepClone(emptyBoard));

  const [snakeBody, setSnakeBody] = useState([1, 1, 1]);
  const [snakeHeadPosition, setSnakeHeadPosition] = useState({ r: 10, c: 10 });
  const [proposedSnakeDirection, setProposedSnakeDirection] = useState(
    SNAKE_DIRECTIONS.ARROW_UP
  );
  const [currentSnakeDirection, setCurrentSnakeDirection] = useState(
    SNAKE_DIRECTIONS.ARROW_UP
  );

  const [foodBoardPosition, setFoodBoardPosition] = useState({ r: 5, c: 5 });
  const [foodBoard, setFoodBoard] = useState(initialFoodBoard);

  const [score, setScore] = useState(0);

  const prohibitedDirections = {
    ArrowUp: SNAKE_DIRECTIONS.ARROW_DOWN,
    ArrowLeft: SNAKE_DIRECTIONS.ARROW_RIGHT,
    ArrowRight: SNAKE_DIRECTIONS.ARROW_LEFT,
    ArrowDown: SNAKE_DIRECTIONS.ARROW_UP,
  };

  /*
   * Function to move the 'snake'. The 'direction' to move the 'snake' is determined by whether the keyed direction is prohibited based
   * on the 'currentSnakeDirection'. This prevents the 'snake' trying to move back into itself.
   *
   * The new direction is plotted and the 'snakeBody' has its values shifted to the right so we can
   * draw the 'snakeBody' based off the directions the 'snakeHead' has taken.
   *
   */
  const moveSnake = () => {
    let { r: newR, c: newC } = snakeHeadPosition;

    let newDirection =
      proposedSnakeDirection === prohibitedDirections[currentSnakeDirection]
        ? currentSnakeDirection
        : proposedSnakeDirection;

    let snakeBodyDirection;

    switch (newDirection) {
      case SNAKE_DIRECTIONS.ARROW_UP:
        newR = snakeHeadPosition.r - 1;
        snakeBodyDirection = 1;
        break;
      case SNAKE_DIRECTIONS.ARROW_RIGHT:
        newC = snakeHeadPosition.c + 1;
        snakeBodyDirection = 2;
        break;
      case SNAKE_DIRECTIONS.ARROW_DOWN:
        newR = snakeHeadPosition.r + 1;
        snakeBodyDirection = 3;
        break;
      case SNAKE_DIRECTIONS.ARROW_LEFT:
        newC = snakeHeadPosition.c - 1;
        snakeBodyDirection = 4;
        break;
    }

    const canMove =
      (displayBoard[newR] && displayBoard[newR][newC] === 0) ||
      (displayBoard[newR] && displayBoard[newR][newC] === FOOD_VALUE);

    if (canMove) {
      setSnakeHeadPosition({
        r: newR,
        c: newC,
      });

      /*
       * The snakeBody follows the head by unshifting the values in the array so they propogate
       * from the front of the array to the back.
       */
      const newSnake = deepClone(snakeBody);
      newSnake.unshift(snakeBodyDirection);
      newSnake.pop();

      setSnakeBody(newSnake);
      setCurrentSnakeDirection(newDirection);
    }
  };

  const keyPress = (event) => {
    event.preventDefault();
    const key = event.code;

    if (Object.values(SNAKE_DIRECTIONS).includes(key)) {
      setProposedSnakeDirection(key);
    }
  };

  /*
   * Event listeners for keypress
   */
  useEffect(() => {
    window.addEventListener('keydown', keyPress);
    return () => {
      window.removeEventListener('keydown', keyPress);
    };
  }, []);

  /*
   * Check to see if the snakeHeadPosition is the same as the foodPosition, which indicates
   * that the snake has caught the food. This useEffect generates an new random position for
   * the next food and updates the boards.
   */
  useEffect(() => {
    if (JSON.stringify(snakeHeadPosition) === JSON.stringify(foodBoardPosition)) {
      const { row, col } = getRandomEmptyBoardPosition(displayBoard);
      const newFoodBoard = createBoard(20, 20, 0);
      newFoodBoard[row][col] = FOOD_VALUE;
      setFoodBoard(newFoodBoard);
      setFoodBoardPosition({ r: row, c: col });
    }
  }, [displayBoard]);

  /*
   * Update the snake & score when the foodBoard is updated. foodBoard is updated when the snake
   * catches the food.
   */
  useEffect(() => {
    const newLongerSnake = growSnake(snakeBody);
    setSnakeBody(newLongerSnake);
    setScore((prev) => prev + 1);
  }, [foodBoard]);

  /*
   * Update the displayBoard when various values are updated.
   */
  useEffect(() => {
    const snakeBoard = addSnakeToBoard(
      deepClone(foodBoard),
      snakeBody,
      snakeHeadPosition
    );
    setDisplayBoard(snakeBoard);
  }, [foodBoard, snakeBody, snakeHeadPosition]);

  /*
   * Interval to move snake every 'delay' milliseconds
   */
  useInterval(() => {
    moveSnake();
  }, 180);

  return (
    <div className='row d-flex gap-3'>
      <div className='col-xs-12 col-lg-5'>
        <p className='lead fw-bold'>Difficulty: ★ ☆ ☆</p>

        <div className='lead'>
          <p className='fw-bold'>Controls:</p>
          <ol>
            <li>Use the Arrow Keys ⬅ ⬇ ➡ to move the snake.</li>
          </ol>
        </div>

        <div className='lead'>
          <p className='fw-bold'>How to play:</p>
          <ol>
            <li>Catch as much food 🟩 as you can.</li>
            <li>The snake will get longer each time you eat the food.</li>
            <li>
              Avoid hitting the walls of the play area, or running into your own tail.
            </li>
            <li>Survival is the name of the game - how long can you last?</li>
          </ol>
        </div>

        <div className='lead'>
          <p className='fw-bold'>Scoring:</p>
          <ol>
            <li>No big scoring system here. One point scored for every food eaten.</li>
          </ol>
        </div>

        <div className='lead'>
          <p className='fw-bold'>Technical details:</p>
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
          </ol>
        </div>

        <div className='lead'>
          <p className='fw-bold'>Challenges:</p>
          <ol>
            <li>
              Preventing the user from directing the snake in the opposite direction,
              whilst allowing it to continue in the current direction of travel.
            </li>
            <li>
              Generating a new food position on an unoccupied cell. You can't just use a
              random generator.
            </li>
            <li>Growing the snake seamlessly.</li>
          </ol>
        </div>

        <div className='lead'>
          <p className='fw-bold'>Credits:</p>
          <ol>
            <li>
              <code>useInterval</code> custom hook written by Dan Abramov
              https://overreacted.io/making-setinterval-declarative-with-react-hooks/
            </li>
          </ol>
        </div>

        <div className='lead'>
          <p className='fw-bold'>Sourcecode:</p>
        </div>
      </div>

      <div className='col-xs-12 col-lg-auto'>
        <div className='d-flex gap-3 '>
          <Board board={displayBoard} />
          <Panel title='Score' value={score} />
        </div>
      </div>
      <div className='lead'>
        <h3 className='text-uppercase fw-bold mb-5'>
          The next section contains spoilers
        </h3>
        <p className='fw-bold'>How to build:</p>
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
            equal, we've caught the food so we generate a new{' '}
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
      </div>
    </div>
  );
};

export default Snake;
