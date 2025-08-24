import { useEffect, useState } from 'react';

import MastermindContext from './context/MastermindContext';
import { useInterval } from './shared/hooks';
import classNames from 'classnames';

import Board from './components/Board';
import Cell from './components/Cell';
import { GameOverlay, Panel } from './shared/components';

import generateSecretCode from './lib/generateSecretCode';

import './shared/styles/global.css';
import styles from './styles/style.module.css';

const Snake = () => {
  const numberOfRows = 10;
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [hasGameStarted, setHasGameStarted] = useState<boolean>(false);
  const [clock, setClock] = useState(0);

  const [secretCode, setSecretCode] = useState<number[]>([0, 0, 0, 0]);
  const [activeRow, setActiveRow] = useState<number>(0);

  const playGameOnClickHandler = () => {
    setHasGameStarted(true);
  };

  useEffect(() => {
    const secretNumber = generateSecretCode();
    setSecretCode(secretNumber);
  }, []);

  useEffect(() => {
    if (activeRow === numberOfRows) {
      setGameOver(true);
    }
  }, [activeRow]);

  /*
   * Interval to speed up gameplay every 30 seconds
   */
  useInterval(() => {
    if (hasGameStarted) {
      setClock((prev) => prev + 1);
    }
  }, 1000);

  return (
    <>
      <div className={styles['mastermind-game-wrapper']}>
        <div className={styles['snake-panel-wrapper']}>
          <Panel sections={[{ heading: 'time', value: clock }]} />
        </div>

        <div
          className={classNames(styles['board-wrapper'], 'overlay-wrapper')}
          data-stack="default"
        >
          <MastermindContext.Provider value={{ secretCode }}>
            <Board
              numberOfRows={numberOfRows}
              additionalBoardClasses="board"
              activeRow={activeRow}
              setActiveRow={setActiveRow}
            />
          </MastermindContext.Provider>

          <p className={styles['secret-heading']}>SECRET CODE</p>

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

        <GameOverlay
          showGameOver={gameOver}
          showGameOverButton={gameOver}
          gameOverButtonAction={playGameOnClickHandler}
        />
      </div>
    </>
  );
};

export default Snake;
