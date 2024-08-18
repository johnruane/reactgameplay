import { convertRowColStringToObject } from './convertRowColStringToObject';

export const returnRowColValue = (board, pos) => {
  if (typeof pos === 'string') {
    const { r, c } = convertRowColStringToObject(pos) || {};
    return board?.[r]?.[c];
  }

  return board?.[pos?.r]?.[pos?.c];
};
