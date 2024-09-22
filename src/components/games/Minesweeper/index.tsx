import { useCallback, useEffect, useRef, useState } from 'react';

/* Components */
import Board from '../Components/Board';
import Controls from '../Components/Controls';
import Panel from '../Components/Panel';
import { create2dArray } from '../utils';
import Cell from './Cell';
import { depthFirstSearch } from './lib/depthFirstSearch';
import { generateCluesBoard } from './lib/generateCluesBoard';

/* Utils */
import { generateMineBoard } from './lib/generateMineBoard';
import { getCellValue } from './lib/getCellValue';
import removeObjectFromArray from './lib/removeObjectFromArray';
import { updateDisplayBoard } from './lib/updateDisplayBoard';

/* Hooks */
import useMediaQuery from '@components/hooks/useMatchMedia';

/* Styles */
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

  const cluesBoard = generateCluesBoard({ board: mineBoard, emptyCellValue });

  const [gameplayBoard, setGameplayBoard] = useState(cluesBoard);
  const [displayBoard, setDisplayBoard] = useState(
    create2dArray({
      numberOfRows: 9,
      numberOfColumns: 9,
      fillValue: emptyCellValue,
    }),
  );

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
      board: gameplayBoard,
      pos: selectedCellPos,
    });

    setDisplayBoard((prev) => {
      const newBoard = updateDisplayBoard({
        displayBoard: prev,
        gameBoard: gameplayBoard,
        cellsToUpdate: cellsToUpdate,
      });
      return newBoard;
    });

    // If cell is a mine set 'game over'
    if (getCellValue({ board: gameplayBoard, pos: selectedCellPos }) === 9) {
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

  return (
    <>
      <div className="gp-game-wrapper minesweeper-game-wrapper">
        <div className="minesweeper-panel-wrapper">
          <Panel
            sections={[
              { heading: 'time', value: 0 },
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
                {gameOver === 'win' ? 'You win!' : 'Game Over'}
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
