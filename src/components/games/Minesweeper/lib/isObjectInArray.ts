import _isEqual from 'lodash/isEqual';
import _some from 'lodash/some';

export const isObjectInArray = ({
  array,
  obj,
}: {
  array: { r: number; c: number }[];
  obj: { r: number; c: number };
}) => {
  return _some(array, (cell) => _isEqual(cell, obj));
};
