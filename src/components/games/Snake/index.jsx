import React, { useState, useEffect } from 'react';
import Board from './Board';

/* Utils */
import { createGameBoard } from '../utils/createBoard';
import { addSnakeToBoard } from './lib/utils/addSnakeToBoard';
import { deepClone } from '../utils/deepClone';

/* Hooks */
import { useInterval } from './hooks/useInterval';
import { findEmptyCells } from './lib/utils/findEmptyCells';

const Snake = () => {
  const emptyBoard = createGameBoard(20, 20, 0);
  const initialFoodBoard = deepClone(emptyBoard);
  initialFoodBoard[5][5] = 3;

  const [displayBoard, setDisplayBoard] = useState(deepClone(emptyBoard));

  const [snakeBody, setSnakeBody] = useState([1, 1, 1]);
  const [snakeHeadPosition, setSnakeHeadPosition] = useState({ r: 10, c: 10 });
  const [snakeDirection, setSnakeDirection] = useState('ArrowUp');

  const [foodBoardPosition, setFoodBoardPosition] = useState({ r: 5, c: 5 });
  const [foodBoard, setFoodBoard] = useState(initialFoodBoard);

  const [delay, setDelay] = useState(500);

  function isDirectionOpposite(direction) {
    let isOpposite = false;
    switch (direction) {
      case 'ArrowUp':
        if (snakeDirection === 'ArrowDown') {
          isOpposite = true;
        }
        break;
      case 'ArrowRight':
        if (snakeDirection === 'ArrowLeft') {
          isOpposite = true;
        }
        break;
      case 'ArrowDown':
        if (snakeDirection === 'ArrowUp') {
          isOpposite = true;
        }
        break;
      case 'ArrowLeft':
        if (snakeDirection === 'ArrowRight') {
          isOpposite = true;
        }
        break;
    }
    return isOpposite;
  }

  /*
   * Update 'snakeHeadPosition', 'snakeNumericDirection' and 'snake' based off 'direction'. If no 'direction' is
   * provided the direction fallback to 'snakeDirection' state.
   *
   */
  const moveSnake = (direction) => {
    let { r: newR, c: newC } = snakeHeadPosition;

    let newDirection = direction || snakeDirection;
    let snakeNumericDirection;

    switch (newDirection) {
      case 'ArrowUp':
        newR = snakeHeadPosition.r - 1;
        snakeNumericDirection = 1;
        break;
      case 'ArrowRight':
        newC = snakeHeadPosition.c + 1;
        snakeNumericDirection = 2;
        break;
      case 'ArrowDown':
        newR = snakeHeadPosition.r + 1;
        snakeNumericDirection = 3;
        break;
      case 'ArrowLeft':
        newC = snakeHeadPosition.c - 1;
        snakeNumericDirection = 4;
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
       * The snakeBody follows the head by unshift() (adding to front of array) the snakeHead direction and
       * pop() (remove end of array), thereby shifting all array values to the right.
       */
      const newSnake = deepClone(snakeBody);
      newSnake.unshift(snakeNumericDirection);
      newSnake.pop();

      setSnakeBody(newSnake);
      setSnakeDirection(newDirection);
    }
  };

  function getRandomEmptyBoardPosition() {
    const availableCells = findEmptyCells(displayBoard);
    const randomPosition =
      availableCells[Math.floor(Math.random() * availableCells.length)];
    const [row, col] = randomPosition.split('-').map(Number);
    return { row, col };
  }

  const keyPress = (event) => {
    event.preventDefault();
    const key = event.code;
    if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(key)) {
      setSnakeDirection(key);
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

  function growSnake() {
    let lastElement = snakeBody[2];
    const copySnakeBody = [...snakeBody];
    copySnakeBody.push(lastElement);
    setSnakeBody(copySnakeBody);
  }

  useEffect(() => {
    if (JSON.stringify(snakeHeadPosition) === JSON.stringify(foodBoardPosition)) {
      const { row, col } = getRandomEmptyBoardPosition();
      const newFoodBoard = createGameBoard(20, 20, 0);
      newFoodBoard[row][col] = 3;
      setFoodBoard(newFoodBoard);
      setFoodBoardPosition({ r: row, c: col });
      growSnake();
    }
  }, [snakeHeadPosition]);

  // useEffect(() => {
  //   const currentSnakeBody = snakeBody;
  //   currentSnakeBody.push(1);
  //   setSnakeBody(currentSnakeBody);
  // }, [foodBoardPosition]);

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
  }, [foodBoard, snakeHeadPosition]);

  /*
   * Interval to move snake every 'delay' milliseconds
   */
  useInterval(() => {
    moveSnake();
  }, delay);

  return (
    <>
      <div className='row'>
        <div className='col-auto'>
          <Board board={displayBoard} />
        </div>
      </div>
    </>
  );
};

export default Snake;
