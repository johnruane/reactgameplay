const path = require('path');
const fse = require('fs-extra');

const sourceGames = path.resolve(__dirname, 'games');

const destGames = path.resolve(
  __dirname,
  '..',
  '..',
  '..',
  'reactgames',
  'games',
);

async function copyGames() {
  try {
    // Resolve actual filesystem paths (follows symlinks)
    const realSource = await fse.realpath(sourceGames);
    const realDest = await fse.realpath(destGames).catch(() => destGames);

    if (realDest.startsWith(realSource)) {
      throw new Error(
        `Destination folder is inside the source folder:\nSource: ${realSource}\nDest: ${realDest}`,
      );
    }

    await fse.copy(realSource, realDest, {
      overwrite: true,
      errorOnExist: false,
      dereference: false, // don't follow symlinks
      filter: (src) => {
        const stats = fse.lstatSync(src);
        return !stats.isSymbolicLink(); // skip symlinks entirely
      },
    });

    console.log(`Copied all games from ${realSource} to ${realDest}`);
  } catch (error) {
    console.error('Error copying games folder:', error);
  }
}

copyGames();
