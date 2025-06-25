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
    await fse.copy(sourceGames, destGames, {
      overwrite: true,
      errorOnExist: false,
    });
    console.log(`Copied all games from ${sourceGames} to ${destGames}`);
  } catch (error) {
    console.error('Error copying games folder:', error);
  }
}

copyGames();
