import React, { useState, useEffect } from 'react';
import Board from './Board';

/* Utils */
import { createGameBoard } from '../utils/createBoard';
import { addSnakeToBoard } from './lib/utils/addSnakeToBoard';

/* Hooks */
import { useInterval } from './hooks/useInterval';

const Snake = () => {
  const [displayBoard, setDisplayBoard] = useState(createGameBoard(20, 20, 0));

  const [snake, setSnake] = useState([1]);

  const [position, setPosition] = useState({ r: 10, c: 10 });
  const [snakeDirection, setSnakeDirection] = useState('ArrowUp');

  const [delay, setDelay] = useState(500);

  /*
   * Update the 'position' either via 'useInterval', in which case 'direction' is 'undefined' or
   * via 'keyPress'.
   */
  const moveSnake = (direction) => {
    let newR = position.r;
    let newC = position.c;
    let newDirection = direction || snakeDirection;

    switch (newDirection) {
      case 'ArrowLeft':
        newC = position.c - 1;
        break;
      case 'ArrowRight':
        newC = position.c + 1;
        break;
      case 'ArrowDown':
        newR = position.r + 1;
        break;
      case 'ArrowUp':
        newR = position.r - 1;
        break;
    }

    const canMove = displayBoard[newR][newC] === 0;

    if (canMove) {
      setPosition({
        r: newR,
        c: newC,
      });
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

  useEffect(() => {
    setDisplayBoard(
      addSnakeToBoard(createGameBoard(20, 20, 0), snake, position.r, position.c)
    );
  }, [snake, position]);

  /*
   * Interval to move tetrominos every 'delay' milliseconds
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
