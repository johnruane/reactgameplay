export function create2dArray(numberOfRows, numberOfColumns, defaultValue = 0) {
  const rows = new Array(numberOfColumns).fill(defaultValue);
  const generatedArray = new Array(numberOfRows).fill(null).map(() => [...rows]);
  return generatedArray;
}
