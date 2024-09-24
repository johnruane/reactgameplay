import { useCallback, useEffect, useRef, useState } from 'react';

import Board from '../Components/Board';
import Controls from '../Components/Controls';
import Panel from '../Components/Panel';

import Cell from './components/Cell';

import { create2dArray } from '../utils';
import { useInterval } from '../utils/hooks/useInterval';

import { depthFirstSearch } from './lib/depthFirstSearch';
import { generateCluesBoard } from './lib/generateCluesBoard';
import { generateMineBoard } from './lib/generateMineBoard';
import { getCellValue } from './lib/getCellValue';
import { isBoardDefaultState } from './lib/isBoardDefaultState';
import removeObjectFromArray from './lib/removeObjectFromArray';
import { updateDisplayBoard } from './lib/updateDisplayBoard';

import useMediaQuery from '@components/hooks/useMatchMedia';

import '../style.scss';
import './minsweeper.scss';

const Minesweeper = ({
  setGameKey,
  setToggleModal,
}: {
  setGameKey: React.Dispatch<React.SetStateAction<number>>;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const boardRef = useRef<HTMLDivElement>(null);

  const numberOfMines = 10;
  const emptyCellValue = -1;

  const mineBoard = generateMineBoard({
    board: create2dArray({
      numberOfRows: 9,
      numberOfColumns: 9,
      fillValue: emptyCellValue,
    }),
    numberOfMines: numberOfMines,
  });

  const cluesBoardRef = useRef<number[][]>(
    generateCluesBoard({ board: mineBoard, emptyCellValue }),
  );

  const [displayBoard, setDisplayBoard] = useState(
    create2dArray({
      numberOfRows: 9,
      numberOfColumns: 9,
      fillValue: emptyCellValue,
    }),
  );

  const [hasGameStarted, setHasGameStarted] = useState(false);
  const [clock, setClock] = useState(0);
  const [gameOver, setGameOver] = useState('');
  const [flagsMarked, setFlagsMarked] = useState<CellPosition[]>([]);

  const gameOverRef = useRef(gameOver);

  const handleCellClick = (e) => {
    if (gameOverRef.current) return;

    const target = e.target;
    const selectedCellValue = target.getAttribute('data-value');
    const selectedCellPos = JSON.parse(target.getAttribute('data-pos'));

    // If cell is a flagged cell stop execution
    if (selectedCellValue === '10') {
      return;
    }

    const cellsToUpdate = depthFirstSearch({
      board: cluesBoardRef.current,
      pos: selectedCellPos,
    });

    setDisplayBoard((prev) => {
      const newBoard = updateDisplayBoard({
        displayBoard: prev,
        gameBoard: cluesBoardRef.current,
        cellsToUpdate: cellsToUpdate,
      });
      return newBoard;
    });

    // If cell is 9 (a mine) set 'game over'
    if (
      getCellValue({ board: cluesBoardRef.current, pos: selectedCellPos }) === 9
    ) {
      setGameOver('lose');
      return;
    }
  };

  const startNewGame = useCallback(() => {
    setGameKey((prev) => prev + 1);
  }, [setGameKey]);

  const quitGame = useCallback(() => {
    setToggleModal(false);
  }, [setToggleModal]);

  useEffect(() => {
    gameOverRef.current = gameOver;
  }, [gameOver]);

  useEffect(() => {
    for (const pos of flagsMarked) {
      const { r, c } = pos || {};
      if (displayBoard[r][c] !== -1) {
        setFlagsMarked((prev) => {
          const newFlagged = removeObjectFromArray({
            array: [...prev],
            obj: pos,
          });
          return newFlagged;
        });
      }
    }
  }, [displayBoard]);

  /*
   * hasGameStarted state controls the clock timer. If the displayBoard cells are all -1 then
   * the game has not begun.
   */
  useEffect(() => {
    const isBoardDefault = isBoardDefaultState({ board: displayBoard });
    if (!isBoardDefault) {
      setHasGameStarted(true);
    }
  }, [displayBoard]);

  useEffect(() => {
    let cellUncovered = 0;
    displayBoard.forEach((row) => {
      row.forEach((cell) => {
        if (cell === -1) {
          cellUncovered += 1;
        }
      });
    });

    // If there are the same number of cells hidden as mines layed, the game is won
    if (cellUncovered === numberOfMines) {
      setGameOver('win');
    }
  }, [displayBoard]);

  useEffect(() => {
    if (gameOver !== '') {
      setHasGameStarted(false);
    }
  }, [gameOver]);

  useEffect(() => {
    if (boardRef.current) {
      boardRef.current.oncontextmenu = (e: MouseEvent) => {
        e.preventDefault();

        const target = e.target as HTMLElement;
        const targetDataValue = target?.getAttribute('data-value');
        const targetDataPos = target?.getAttribute('data-pos');
        const targetCellPos = targetDataPos ? JSON.parse(targetDataPos) : null;

        // Flag cell
        if (
          numberOfMines - flagsMarked.length !== 0 &&
          targetDataValue === '-1'
        ) {
          target.setAttribute('data-value', '10');
          setFlagsMarked((prev) => [...prev, targetCellPos]);
        }

        // Un-flag cell
        if (targetDataValue === '10') {
          target.setAttribute('data-value', '-1');

          setFlagsMarked((prev) => {
            const newFlagged = removeObjectFromArray({
              array: [...prev],
              obj: targetCellPos,
            });
            return newFlagged;
          });
        }
      };
    }
  }, [flagsMarked]);

  /*
   * Interval to move tetrominos every 'speed' milliseconds
   */
  useInterval(() => {
    if (hasGameStarted) {
      setClock((prev) => prev + 1);
    }
  }, 1000);

  return (
    <>
      <div className="gp-game-wrapper minesweeper-game-wrapper">
        <div className="minesweeper-panel-wrapper">
          <Panel
            sections={[
              { heading: 'clock', value: clock },
              { heading: 'flags', value: numberOfMines - flagsMarked.length },
            ]}
          />
          <span className="minesweeper-emoji"> {gameOver ? '😵' : '😀'}</span>
        </div>

        <div className="overlay-wrapper">
          <Board
            ref={boardRef}
            board={displayBoard}
            Cell={Cell}
            className="minesweeper-board"
            // @ts-expect-error will never be null
            onClickCellCallback={handleCellClick}
            isGameOver={gameOver}
          />
          <div className="overlay-text-wrapper">
            {gameOver && (
              <p className="overlay-text">
                {gameOver === 'win' ? 'You win!' : 'You Lose'}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="game-instructions">
        <p className="panel-text panel-text-bold">Instructions</p>

        <ul className="panel-text game-list">
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

      <div className="game-controls-wrapper">
        <Controls
          move={() => null}
          onStartClickHandler={startNewGame}
          onQuitClickHandler={quitGame}
        />
      </div>
    </>
  );
};

export default Minesweeper;
