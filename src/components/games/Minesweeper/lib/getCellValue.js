/**
 * Takes @board and @p and returns the value of the ceel on @board at position @p
 *
 * @param {Number[][]} board
 * @param {{r: string, c: string}[]} p
 * @return {{r: string, c: string}}
 */

export const getCellValue = (board, p) => {
  if (!board || !p) return null;

  const cellValue = board?.[p.r]?.[p.c];

  return typeof cellValue === 'number' && Number.isFinite(cellValue) ? cellValue : null;
};
