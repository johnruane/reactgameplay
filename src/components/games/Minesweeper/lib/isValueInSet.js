import isEqual from 'lodash/isEqual';

/**
 * Helper function to find and object @obj in Set @set This is due to object comparison and equality of reference
 * over value. This helper compares the values of the objects.
 *
 * @param {Set<{r: string, c: string}>} set
 * @param {{r: string, c: string}[]} obj
 * @return {bollean}
 */

export const isValueInSet = (set, obj) => {
  for (const item of set) {
    if (isEqual(item, obj)) {
      return true;
    }
  }
  return false;
};
