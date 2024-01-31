import React, { useState, useEffect } from 'react';
import Board from './Board';

/* Utils */
import { createGameBoard } from '../utils/createBoard';
import { addSnakeToBoard } from './lib/utils/addSnakeToBoard';

/* Hooks */
import { useInterval } from './hooks/useInterval';

const Snake = () => {
  const gameBoard = createGameBoard(20, 20, 0);
  const [displayBoard, setDisplayBoard] = useState([...gameBoard]);

  const [position, setPosition] = useState({ r: 10, c: 10 });
  const [snake, setSnake] = useState([1, 1, 1]);
  const [snakeDirection, setSnakeDirection] = useState('ArrowUp');

  const [delay, setDelay] = useState(1000);

  /*
   * Update 'position', 'snakeNumericDirection' and 'snake' based off 'direction'. If no 'direction' is
   * provided the direction fallback to 'snakeDirection' state.
   *
   */
  const moveSnake = (direction) => {
    let newR = position.r;
    let newC = position.c;

    let newDirection = direction || snakeDirection;
    let snakeNumericDirection;

    switch (newDirection) {
      case 'ArrowUp':
        newR = position.r - 1;
        snakeNumericDirection = 1;
        break;
      case 'ArrowRight':
        newC = position.c + 1;
        snakeNumericDirection = 2;
        break;
      case 'ArrowDown':
        newR = position.r + 1;
        snakeNumericDirection = 3;
        break;
      case 'ArrowLeft':
        newC = position.c - 1;
        snakeNumericDirection = 4;
        break;
    }

    const canMove = displayBoard[newR][newC] === 0;

    if (canMove) {
      setPosition({
        r: newR,
        c: newC,
      });

      const newSnake = [...snake];
      newSnake.unshift(snakeNumericDirection);
      newSnake.pop();

      setSnake(newSnake);
      setSnakeDirection(newDirection);
    }
  };

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

  /*
   * useEffect to update the displayBoard when position is updated.
   */
  useEffect(() => {
    setDisplayBoard(addSnakeToBoard([...gameBoard], snake, position));
  }, [position]);

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
