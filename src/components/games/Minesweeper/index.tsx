import { useEffect, useState } from 'react';

/* Utils */
import { generateMineBoard } from './lib/generateMineBoard';
import { generateCluesBoard } from './lib/generateCluesBoard';
import { updateDisplayBoard } from './lib/updateDisplayBoard';
import { getCellValue } from './lib/getCellValue';
import { depthFirstSearch } from './lib/depthFirstSearch';
import { findNumberedNeighbours } from './lib/findNumberedNeighbours';
import { create2dArray } from '../utils';

/* Components */
import Board from '../Components/Board';
import Cell from './Cell';
import Controls from '../Components/Controls';
import Panel from '../Components/Panel';

/* Styles */
import '../style.scss';
import './minsweeper.scss';

const Minesweeper = () => {
  const mineCount = 9;
  const emptyCellValue = -1;
  const mineBoard = generateMineBoard({
    board: create2dArray({
      numberOfRows: 9,
      numberOfColumns: 9,
      fillValue: emptyCellValue,
    }),
    numberOfMines: mineCount,
  });

  const cluesBoard = generateCluesBoard({ board: mineBoard, emptyCellValue });

  const [gameplayBoard, setGameplayBoard] = useState();
  const [displayBoard, setDisplayBoard] = useState(
    create2dArray({
      numberOfRows: 9,
      numberOfColumns: 9,
      fillValue: emptyCellValue,
    })
  );

  const [cellSelected, setCellSelected] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  function handleCellClick(e) {
    if (gameOver || gameWon) return;

    const selectedCellPos = JSON.parse(e.target.getAttribute('data-pos'));
    console.log(selectedCellPos);
    const dfsCells = depthFirstSearch({ board: gameplayBoard, pos: selectedCellPos });
    const numberedCells = findNumberedNeighbours({
      board: gameplayBoard,
      cellsToSearch: dfsCells,
    });

    const combinedCells = dfsCells.length > 1 ? dfsCells.concat(numberedCells) : dfsCells;

    const newBoard = updateDisplayBoard({
      displayBoard,
      gameBoard: gameplayBoard,
      cellsToUpdate: combinedCells,
    });

    setDisplayBoard(newBoard);
    setCellSelected(selectedCellPos);
  }

  function initialiseGame() {
    setGameplayBoard(cluesBoard);
  }

  useEffect(() => {
    if (getCellValue({ board: gameplayBoard, pos: cellSelected }) === 9) {
      setGameOver(true);
    }
  }, [cellSelected]);

  useEffect(() => {
    let mineCount = 0;
    displayBoard.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell === -1) {
          mineCount += 1;
        }
      });
    });
    if (mineCount === 9) {
      setGameWon(true);
    }
  }, [displayBoard]);

  useEffect(() => {
    initialiseGame();
  }, []);

  return (
    <>
      <div className='gp-game-wrapper minesweeper-game-wrapper'>
        <div className='overlay-wrapper'>
          <Board
            board={displayBoard}
            Cell={Cell}
            className='minesweeper-board'
            onClickCellCallback={handleCellClick}
            isGameOver={gameOver}
          />
          <div className='overlay-text-wrapper'>
            {gameOver && <p className='overlay-text'>Game Over</p>}
            {gameWon && <p className='overlay-text'>You win!</p>}
          </div>
        </div>

        <div className='minesweeper-panel-wrapper'>
          <Panel sections={[{ heading: 'time', value: 0 }]} />
          <Panel
            sections={[
              {
                heading: 'Controls',
                value: (
                  <>
                    <span className='panel-text'>A = REVEAL</span>
                    <span className='panel-text'>B = FLAG</span>
                    <span className='panel-text'>PAD = MOVE</span>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
      <div className='game-controls-wrapper'>
        <Controls
        // move={setProposedSnakeDirection}
        // onStartClickHandler={startGame}
        // onSelectClickHandler={onSelectClickHandler}
        />
      </div>
    </>
  );
};

export default Minesweeper;
