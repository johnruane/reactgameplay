/**
 * Takes @board and @pos and returns the value of the ceel on @board at position @pos
 *
 * @param {Number[][]} board
 * @param {{r: string, c: string}[]} pos
 * @return {{r: string, c: string}}
 */

export const getCellValue = ({ board, pos }) => {
  if (!board || !pos) return null;

  const { r, c } = pos || {};
  const cellValue = board?.[r]?.[c];

  return typeof cellValue === 'number' && Number.isFinite(cellValue) ? cellValue : null;
};
