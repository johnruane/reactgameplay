/**
 * Deep clones array
 *
 * @return {Array} Array copy
 */
export function deepClone(array) {
  if (!array) return;

  const strArray = JSON.stringify(array);
  return JSON.parse(strArray);
}
