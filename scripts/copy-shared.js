const path = require('path');
const fse = require('fs-extra');

const gameDirectories = ['Tetris', 'Snake', 'Minesweeper'];
const sharedDirectory = path.resolve(__dirname, '..', 'apps', 'shared');

async function copyShared() {
  try {
    for (gameDir of gameDirectories) {
      const destination = path.resolve(
        __dirname,
        '..',
        'apps',
        'games',
        gameDir,
        'shared',
      );
      await fse.copy(sharedDirectory, destination);
      console.log(`Copied shared to apps/games/${gameDir}`);
    }
    console.log('Shared folder copied to all apps successfully.');
  } catch (error) {
    console.error('Error copying shared folder:', error);
  }
}

copyShared();
