import _isEqual from 'lodash/isEqual';
import _some from 'lodash/some';

export const isObjectInArray = ({ array, obj }) => {
  return _some(array, (cell) => _isEqual(cell, obj));
};
