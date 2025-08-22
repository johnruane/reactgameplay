import { useEffect, useState } from 'react';

import MastermindContext from './context/MastermindContext';
import classNames from 'classnames';

import Board from './components/Board';
import Cell from './components/Cell';
import { Panel } from './shared/components';

import generateSecretCode from './lib/generateSecretCode';

import './shared/styles/global.css';
import styles from './styles/style.module.css';

const Snake = () => {
  // const [gameOver, setGameOver] = useState<boolean>(false);
  // const [hasGameStarted, setHasGameStarted] = useState<boolean>(false);

  const [secretCode, setSecretCode] = useState<number[]>([0, 0, 0, 0]);
  const [activeRow, setActiveRow] = useState<number>(0);

  useEffect(() => {
    const secretNumber = generateSecretCode();
    setSecretCode(secretNumber);
  }, []);

  // const keyPress = (event) => {
  //   event.preventDefault();
  //   const key = event.code;

  //   if (Object.values(SNAKE_DIRECTIONS).includes(key)) {
  //     setProposedSnakeDirection(key);
  //   }
  // };

  // /*
  //  * Event listeners for keypress
  //  */
  // useEffect(() => {
  //   window.addEventListener('keydown', keyPress);
  //   return () => {
  //     window.removeEventListener('keydown', keyPress);
  //   };
  // }, []);

  // /*
  //  * Check to see if the snakeHeadPosition is the same as the foodPosition, which indicates
  //  * that the snake has caught the food. This useEffect generates an new random position for
  //  * the next food and updates the boards.
  //  */
  // useEffect(() => {
  //   if (JSON.stringify(snakeHeadPosition) === JSON.stringify(foodBoardPosition)) {
  //     const { row, col } = getRandomEmptyBoardPosition({ board: displayBoard });
  //     const newFoodBoard = create2dArray({
  //       numberOfRows: 15,
  //       numberOfColumns: 15,
  //       fillValue: 0,
  //     });

  //     newFoodBoard[row][col] = FOOD_VALUE;
  //     setFoodBoard(newFoodBoard);
  //     setFoodBoardPosition({ r: row, c: col });
  //     setScore(score + 1);
  //   }
  // }, [displayBoard]);

  // /*
  //  * Interval to speed up gameplay every 30 seconds
  //  */
  // useInterval(() => {
  //   setLevelInterval((prev) => (prev !== null ? prev * 0.9 : prev));
  // }, levelInterval);

  return (
    <>
      <div className={styles['mastermind-game-wrapper']}>
        <div className={styles['snake-panel-wrapper']}>
          <Panel sections={[{ heading: 'time', value: 0 }]} />
        </div>

        <div
          className={classNames(styles['board-wrapper'], 'overlay-wrapper')}
          data-stack="default"
        >
          <MastermindContext.Provider value={secretCode}>
            <Board
              numberOfRows={10}
              additionalBoardClasses="board"
              activeRow={activeRow}
              setActiveRow={setActiveRow}
            />
          </MastermindContext.Provider>
          {/* <GameOverlay
            showGameOver={gameOver}
            showGameOverButton={!hasGameStarted}
            // gameOverButtonAction={startGame}
          /> */}
          <div className={styles['answer-row']}>
            {Array.from(secretCode).map((value, index) => {
              return (
                <Cell
                  dataValue={value}
                  key={`result-cell-${index}-${value}`}
                  additionalClasses={styles['answer-row-cell']}
                />
              );
            })}
            <span className={styles['dummy-cell']}></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Snake;
