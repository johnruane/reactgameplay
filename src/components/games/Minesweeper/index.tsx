import { useCallback, useEffect, useState, useRef, MouseEvent } from 'react';

/* Utils */
import { generateMineBoard } from './lib/generateMineBoard';
import { generateCluesBoard } from './lib/generateCluesBoard';
import { updateDisplayBoard } from './lib/updateDisplayBoard';
import { getCellValue } from './lib/getCellValue';
import { depthFirstSearch } from './lib/depthFirstSearch';
import { findNumberedNeighbours } from './lib/findNumberedNeighbours';
import { create2dArray } from '../utils';

/* Hooks */
import useMediaQuery from '@components/hooks/useMatchMedia';

/* Components */
import Board from '../Components/Board';
import Cell from './Cell';
import Controls from '../Components/Controls';
import Panel from '../Components/Panel';

/* Styles */
import '../style.scss';
import './minsweeper.scss';

const Minesweeper = () => {
  const boardRef = useRef<HTMLDivElement>(null);

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

  const [gameplayBoard, setGameplayBoard] = useState(cluesBoard);
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
  const [flagsMarked, setFlagsMarked] = useState<number>(10);

  const handleCellClick = useCallback(
    (e) => {
      if (gameOver || gameWon) return;

      const selectedCellPos = JSON.parse(e.target.getAttribute('data-pos'));
      const dfsCells = depthFirstSearch({ board: gameplayBoard, pos: selectedCellPos });

      const numberedCells = findNumberedNeighbours({
        board: gameplayBoard,
        cellsToSearch: dfsCells,
      });

      const combinedCells =
        dfsCells.length > 1 ? dfsCells.concat(numberedCells) : dfsCells;

      setDisplayBoard((prevDisplayBoard) => {
        const newBoard = updateDisplayBoard({
          displayBoard: prevDisplayBoard,
          gameBoard: gameplayBoard,
          cellsToUpdate: combinedCells,
        });
        return newBoard;
      });

      setCellSelected(selectedCellPos);
    },
    [displayBoard, gameplayBoard]
  );

  function startNewGame() {
    setGameplayBoard(cluesBoard);
  }

  useEffect(() => {
    if (cellSelected && getCellValue({ board: gameplayBoard, pos: cellSelected }) === 9) {
      setGameOver(true);
    }
  }, [cellSelected]);

  useEffect(() => {
    let mineCount = 0;
    displayBoard.forEach((row) => {
      row.forEach((cell) => {
        if (cell === -1) {
          mineCount += 1;
        }
      });
    });
    if (mineCount === 9) {
      setGameWon(true);
    }
  }, [displayBoard]);

  function rightClick(e) {
    e.preventDefault();

    switch (e.target.getAttribute('data-value')) {
      case '-1':
        e.target.setAttribute('data-value', '10');
        setFlagsMarked((prev) => prev - 1);
        break;
      case '10':
        e.target.setAttribute('data-value', '-1');
        setFlagsMarked((prev) => prev + 1);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    if (boardRef.current) {
      boardRef.current.oncontextmenu = rightClick;
    }
  }, []);

  // useEffect(() => {
  //   initialiseGame();
  // }, []);

  return (
    <>
      <div className='gp-game-wrapper minesweeper-game-wrapper'>
        <div className='minesweeper-panel-wrapper'>
          <Panel
            sections={[
              { heading: 'time', value: 0 },
              { heading: 'mines', value: flagsMarked },
            ]}
          />
          <span className='minesweeper-emoji'>&#128512;</span>
        </div>

        <div className='overlay-wrapper'>
          <Board
            ref={boardRef}
            board={displayBoard}
            Cell={Cell}
            className='minesweeper-board'
            // @ts-expect-error will never be null
            onClickCellCallback={handleCellClick}
            isGameOver={gameOver}
          />
          <div className='overlay-text-wrapper'>
            {gameOver && <p className='overlay-text'>Game Over</p>}
            {gameWon && <p className='overlay-text'>You win!</p>}
          </div>
        </div>
      </div>

      <div className='game-instructions'>
        <p className='panel-text panel-text-bold'>Instructions</p>

        <ul className='panel-text game-list'>
          <li>Press START to begin the game or play again when GAME OVER.</li>
          <li>To quit and close, press QUIT.</li>
          {useMediaQuery('DESKTOP') ? (
            <>
              <li>Use the MOUSE to select a cell.</li>
              <li>LEFT-CLICK to reveal a cell.</li>
              <li>RIGHT-CLICK to mark a cell with a flag.</li>
            </>
          ) : (
            <>
              <li>Use the d-pad to move Left, Right, Up or Down.</li>
              <li>Press A to reveal a cell.</li>
              <li>Press B to mark a cell with a flag.</li>
            </>
          )}
        </ul>
      </div>

      <div className='game-controls-wrapper'>
        <Controls
          move={() => null}
          onStartClickHandler={startNewGame}
          onQuitClickHandler={() => null}
        />
      </div>
    </>
  );
};

export default Minesweeper;
