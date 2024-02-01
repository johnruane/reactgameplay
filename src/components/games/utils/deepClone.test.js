import { deepClone } from './deepClone';

describe('deepClone Test Suite', () => {
  it.each`
    array                     | output
    ${[1, 2, 3]}              | ${[1, 2, 3]}
    ${[[1, 2, 3], [1, 2, 3]]} | ${[[1, 2, 3], [1, 2, 3]]}
    ${[[1, 2, 3], [1]]}       | ${[[1, 2, 3], [1]]}
    ${[[1, 2, [1]]]}          | ${[[1, 2, [1]]]}
  `('should return copy of the array', ({ array, output }) => {
    expect(JSON.stringify(deepClone(array))).toBe(JSON.stringify(output));
  });
});
