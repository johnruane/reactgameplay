import { useEffect, useState } from 'react';

/* Utils */
import { generateMineBoard } from './lib/generateMineBoard';
import { create2dArray } from '../utils/create2dArray';
import { deepClone } from '../utils/deepClone';
import { generateCluesBoard } from './lib/generateCluesBoard';
import { updateDisplayBoard } from './lib/updateDisplayBoard';

/* Components */
import Board from '../Components/Board';
import Cell from './Cell';

/* Styles */
import '../style.scss';
import './minsweeper.scss';

const Minesweeper = () => {
  const mineCount = 9;
  const mineBoard = generateMineBoard(create2dArray(9, 9), mineCount);
  const cluesBoard = generateCluesBoard(mineBoard);

  const [gameplayBoard, setGameplayBoard] = useState();
  const [displayBoard, setDisplayBoard] = useState(deepClone(create2dArray(9, 9)));

  console.log(gameplayBoard);

  function handleCellClick(e) {
    const selectedCellPos = e.target.getAttribute('data-pos');
    console.log(selectedCellPos);
    setDisplayBoard(updateDisplayBoard(displayBoard, gameplayBoard, selectedCellPos));
  }

  function initialiseGame() {
    setGameplayBoard(cluesBoard);
  }

  useEffect(() => {
    initialiseGame();
  }, []);

  /*
   * 9x9 board = 10 mines
   * randomly place 10 mines on a board
   * loop each square and add a number based on how many mies it is touching
   */

  return (
    <div className='layout-grid'>
      <Board
        board={displayBoard}
        Cell={Cell}
        className='minesweeper-board'
        onClickCellCallback={handleCellClick}
      />
    </div>
  );
};

export default Minesweeper;
