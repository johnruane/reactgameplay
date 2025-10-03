import {
  addTetrominoToBoard,
  animateCompleteRow,
  convertScore,
  findCompletedRows,
  removeRowsFromBoard,
} from '../lib';

/*
 * When staticBoard is updated, that signals that a play has ended so we need to check for completed
 * rows on the board. Completed rows are returned in an array of indexes. Indexed rows are removed from
 * a clone of the static board. The updated board is passed as an argument to the animateWinningRows
 * function to be executed as a 'onFinish' function if the index is the last row to be animated.
 */

export const handleAnimationOfCompletedRow = ({
  setLines,
  setScore,
  score,
  currentTetromino,
  staticBoardRef,
  pauseGameplay,
  restoreGameplay,
  makeNextPlay,
}) => {
  if (!currentTetromino) return;

  // Check for completed rows
  const cloneBoard = staticBoardRef.current.map((row) => [...row]);
  const indexesOfCompleteRows = findCompletedRows({ board: cloneBoard }).sort(
    (a, b) => a - b,
  );

  // If no completed rows, start next play
  if (indexesOfCompleteRows.length === 0) {
    makeNextPlay();
    return;
  }

  const updatedBoard = removeRowsFromBoard(cloneBoard, indexesOfCompleteRows);

  pauseGameplay(); // Pause so animation can run

  // Callback function to be executed after the last animation has completed
  const updateStaticBoardCallback = () => {
    staticBoardRef.current = updatedBoard;
    makeNextPlay();
    restoreGameplay();
  };

  // Animate each complete row
  indexesOfCompleteRows.forEach((element, index) => {
    animateCompleteRow(
      element,
      index === indexesOfCompleteRows.length - 1,
      updateStaticBoardCallback,
    );
    setLines((current) => current + 1);
  });

  setScore(convertScore(score, indexesOfCompleteRows.length));
};
