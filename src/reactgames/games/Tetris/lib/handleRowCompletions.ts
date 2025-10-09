import { convertScore, findCompletedRows, removeRowsFromBoard } from '../lib';

export const handleRowCompletions = ({
  setLines,
  setScore,
  score,
  currentTetromino,
  staticBoardRef,
  pauseGameplay,
  restoreGameplay,
  makeNextPlay,
  setAnimatingRows,
}) => {
  if (!currentTetromino) return;

  // Check for completed rows
  const indexesOfCompleteRows = findCompletedRows({
    board: staticBoardRef.current,
  }).sort((a, b) => a - b);

  // If no completed rows, start next play
  if (indexesOfCompleteRows.length === 0) {
    makeNextPlay();
    return;
  }

  const cloneBoard = staticBoardRef.current.map((row) => [...row]);
  const boardWithCompletedRowsRemoved = removeRowsFromBoard(
    cloneBoard,
    indexesOfCompleteRows,
  );

  const updateAfterAnimation = () => {
    setAnimatingRows(new Set());
    staticBoardRef.current = boardWithCompletedRowsRemoved;
    makeNextPlay();
    restoreGameplay();
    setLines((current) => current + indexesOfCompleteRows.length);
    setScore(convertScore(score, indexesOfCompleteRows.length));
  };

  pauseGameplay();
  setAnimatingRows(new Set(indexesOfCompleteRows));

  setTimeout(() => {
    updateAfterAnimation();
  }, 300 * indexesOfCompleteRows.length);
};
