/**
 * Calculates the number of exact matches (correct color in correct position)
 * and partial matches (correct color in wrong position) for a Mastermind-style game.
 *
 * @param {Object} params - The function parameters.
 * @param {Array<number|string>} params.guess - The player's guess array.
 * @param {Array<number|string>} params.secret - The secret code array to compare against.
 *
 * @returns {{ matches: number, appears: number }} An object containing:
 * - `matches`: Number of exact matches (correct value at the correct index).
 * - `appears`: Number of correct values in the wrong position, not already counted in matches.
 *
 * @example
 * calculateResults({ guess: [1, 2, 3, 4], secret: [1, 3, 4, 2] });
 * // Returns: { matches: 1, appears: 3 }
 */

const calculateResults = ({ guess, secret }) => {
  let matches = 0;
  let includes = 0;

  const secretClone = [...secret];

  guess.forEach((value, index) => {
    if (secret[`${index}`] === value) {
      matches += 1;
      delete secretClone[`${index}`];
    }
  });

  guess.forEach((value) => {
    if (secretClone.includes(value)) {
      includes += 1;
      delete secretClone[secretClone.indexOf(value)];
    }
  });

  return {
    matches: matches,
    appears: includes,
  };
};

export default calculateResults;
