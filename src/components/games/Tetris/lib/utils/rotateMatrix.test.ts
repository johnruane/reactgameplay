import { t1, t3, t5 } from './__test__/testUtils';
import { rotateMatrix } from './rotateMatrix';

describe('rotateMatrix Test Suite', () => {
  it.each`
    matrix | output
    ${t1}  | ${[[0, 1], [0, 0]]}
    ${t3}  | ${[[0, 0], [1, 1]]}
    ${t5}  | ${[[0, 1], [1, 0]]}
  `(
    'should return rotated version of provided matrix',
    ({ matrix, output }) => {
      expect(JSON.stringify(rotateMatrix(matrix))).toBe(JSON.stringify(output));
    },
  );
});
