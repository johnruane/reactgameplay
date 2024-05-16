import { useState, useEffect } from 'react';
import classNames from 'classnames';

/* Components */
import Board from '../Components/Board';
import Controls from '../Components/Controls';
import Panel from '../Components/Panel';

/* Utils */
import { addSnakeToBoard, growSnake, getRandomEmptyBoardPosition } from './lib/utils';
import { deepClone, createBoard } from '../utils';

/* Hooks */
import { useInterval } from './hooks/useInterval';

/* Styles */
import style from './snake.module.css';

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
  const [gameOver, setGameOver] = useState(false);
  const [hasGameStarted, setHasGameStarted] = useState(false);

  const [speed, setSpeed] = useState(null);
  const [levelInterval, setLevelInterval] = useState(null);

  const prohibitedDirections = {
    ArrowUp: SNAKE_DIRECTIONS.ARROW_DOWN,
    ArrowLeft: SNAKE_DIRECTIONS.ARROW_RIGHT,
    ArrowRight: SNAKE_DIRECTIONS.ARROW_LEFT,
    ArrowDown: SNAKE_DIRECTIONS.ARROW_UP,
  };

  const startGame = () => {
    setSnakeBody([1, 1, 1]);
    setSnakeHeadPosition({ r: 10, c: 10 });
    setProposedSnakeDirection(SNAKE_DIRECTIONS.ARROW_UP);
    setCurrentSnakeDirection(SNAKE_DIRECTIONS.ARROW_UP);

    setFoodBoard(initialFoodBoard);
    setFoodBoardPosition({ r: 5, c: 5 });

    setScore(0);
    setGameOver(false);
    setHasGameStarted(true);

    setSpeed(180);
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
    } else {
      setGameOver(true);
      setHasGameStarted(false);
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
  }, speed);

  /*
   * Interval to speed up gameplay every 30 seconds
   */
  useInterval(() => {
    setLevelInterval((prev) => prev * 0.9);
  }, levelInterval);

  return (
    <>
      <div className={style.layoutGrid}>
        <div className={style.boardWrapper}>
          <Board board={displayBoard} />
          {gameOver && <p className={style.gameOverText}>Game Over</p>}
        </div>
        <div className={style.scoreWrapper}>
          <Panel title='Score' value={score} />
        </div>
        <div className={style.startOverWrapper}>
          {!hasGameStarted && (
            <button
              className={classNames(style.gameOverText, style.startButton)}
              onClick={() => startGame()}
            >
              Start Game
            </button>
          )}
        </div>
      </div>

      <div className={style.controlsWrapper}>
        <Controls move={setProposedSnakeDirection} />
      </div>
    </>
  );
};

export default Snake;
