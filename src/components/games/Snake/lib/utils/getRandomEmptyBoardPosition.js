import { findEmptyCells } from './findEmptyCells';

export function getRandomEmptyBoardPosition(board) {
  const availableCells = findEmptyCells(board);

  const randomPosition =
    availableCells[Math.floor(Math.random() * availableCells.length)];
  const [row, col] = randomPosition.split('-').map(Number);
  return { row, col };
}
