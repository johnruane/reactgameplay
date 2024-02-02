import React, { useState, useEffect } from 'react';

/* Components */
import Board from './Board';
import Panel from './Panel';

/* Utils */
import { createGameBoard } from '../utils/createBoard';
import { addSnakeToBoard } from './lib/utils/addSnakeToBoard';
import { deepClone } from '../utils/deepClone';
import { growSnake } from './lib/utils/growSnake';
import { getRandomEmptyBoardPosition } from './lib/utils/getRandomEmptyBoardPosition';

/* Hooks */
import { useInterval } from './hooks/useInterval';

const SNAKE_DIRECTIONS = {
  ARROW_UP: 'ArrowUp',
  ARROW_DOWN: 'ArrowDown',
  ARROW_RIGHT: 'ArrowRight',
  ARROW_LEFT: 'ArrowLeft',
};

const Snake = () => {
  const emptyBoard = createGameBoard(20, 20, 0);
  const initialFoodBoard = deepClone(emptyBoard);
  initialFoodBoard[5][5] = 3;

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

  const prohibitedDirections = {
    ArrowUp: SNAKE_DIRECTIONS.ARROW_DOWN,
    ArrowLeft: SNAKE_DIRECTIONS.ARROW_RIGHT,
    ArrowRight: SNAKE_DIRECTIONS.ARROW_LEFT,
    ArrowDown: SNAKE_DIRECTIONS.ARROW_UP,
  };

  /*
   * Update 'snakeHeadPosition', 'snakeNumericDirection' and 'snake' based off 'direction'. If no 'direction' is
   * provided the direction fallback to 'proposedSnakeDirection' state.
   *
   */
  const moveSnake = () => {
    let { r: newR, c: newC } = snakeHeadPosition;

    /*
     * Before moving the 'snake' in the direction of 'proposedSnakeDirection' we need to prevent trying to move the 'snake'
     * back towards itself. To do this we take the 'currentSnakeDirection' as key to object of prohibited directions. If it
     * matches then we carry on going in the 'currentSnakeDirection'.
     */
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
      displayBoard[newR][newC] === 3;

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

  useEffect(() => {
    if (JSON.stringify(snakeHeadPosition) === JSON.stringify(foodBoardPosition)) {
      const { row, col } = getRandomEmptyBoardPosition(displayBoard);
      const newFoodBoard = createGameBoard(20, 20, 0);
      newFoodBoard[row][col] = 3;
      setFoodBoard(newFoodBoard);
      setFoodBoardPosition({ r: row, c: col });

      const newLongerSnake = growSnake(snakeBody);
      setSnakeBody(newLongerSnake);
    }
  }, [snakeHeadPosition, displayBoard, foodBoardPosition, snakeBody]);

  /*
   * useEffect to update the displayBoard when snakeHeadPosition is updated.
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
  }, 400);

  return (
    <>
      <div className='d-flex column-gap-3'>
        <div className='col-xs-12 col-lg-5'>
          <div>
            <p className='lead fw-bold'>How to play:</p>
            <ol className='lead'>
              <li>Use the Arrow Keys ⬅ ⬇ ➡ to move the snake.</li>
              <li>Catch the 🟩 food to increase the level score and grow the snake.</li>
              <li>
                Avoid hitting the walls of the play area, or running into your own tail.
              </li>
            </ol>
          </div>
        </div>

        <div className='col-auto d-flex column-gap-3'>
          <Board board={displayBoard} />
          <Panel title='Score' value={0} />
        </div>
      </div>
    </>
  );
};

export default Snake;
