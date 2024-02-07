export function createBoard(rows, columns, defaultValue) {
  const gameRow = new Array(columns).fill(defaultValue);
  const gameBoard = new Array(rows).fill(null).map(() => [...gameRow]);
  return gameBoard;
}
