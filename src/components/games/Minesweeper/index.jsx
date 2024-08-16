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
import Controls from '../Components/Controls';
import Panel from '../Components/Panel';

/* Styles */
import '../style.scss';
import './minsweeper.scss';

const Minesweeper = () => {
  const mineCount = 9;
  const mineBoard = generateMineBoard(create2dArray(9, 9), mineCount);
  const cluesBoard = generateCluesBoard(mineBoard);

  const [gameplayBoard, setGameplayBoard] = useState();
  const [displayBoard, setDisplayBoard] = useState(deepClone(create2dArray(9, 9)));
  const [cellSelected, setCellSelected] = useState({ r: null, c: null });

  const [gameOver, setGameOver] = useState(false);

  function handleCellClick(e) {
    if (gameOver) return;

    console.log('test');
    const selectedCellPos = e.target.getAttribute('data-pos');
    setCellSelected({
      r: selectedCellPos.split('-')[0],
      c: selectedCellPos.split('-')[1],
    });
    setDisplayBoard(updateDisplayBoard(displayBoard, gameplayBoard, selectedCellPos));
  }

  function initialiseGame() {
    setGameplayBoard(cluesBoard);
  }

  useEffect(() => {
    if (gameplayBoard && gameplayBoard[cellSelected.r][cellSelected.c] === 9) {
      setGameOver(true);
    }
  }, [cellSelected]);

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
