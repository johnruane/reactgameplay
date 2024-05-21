import { useState } from 'react';

/* Utils */
import { generateMineBoard } from './lib/generateMineBoard';
import { create2dArray } from '../utils/create2dArray';
import { deepClone } from '../utils/deepClone';

/* Components */
import Board from '../Components/Board';

/* Styles */
import './minsweeper.scss';

const Minesweeper = () => {
  const mineCount = 9;
  const mineBoard = generateMineBoard(create2dArray(9, 9), mineCount);

  const [displayBoard, setDisplayBoard] = useState(deepClone(mineBoard));

  /*
   * 9x9 board = 10 mines
   * randomly place 10 mines on a board
   * loop each square and add a number based on how many mies it is touching
   */

  return (
    <div className='layout-grid'>
      <div className='test'></div>
      <Board board={displayBoard} className='minesweeper-board' />
    </div>
  );
};

export default Minesweeper;
