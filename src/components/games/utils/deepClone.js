/**
 * Deep clones array
 *
 * @return {Array} Array copy
 */
export function deepClone(array) {
  const strArray = JSON.stringify(array);
  return JSON.parse(strArray);
}
