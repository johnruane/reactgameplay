const path = require('path');
const fse = require('fs-extra');

const gamesRoot = path.resolve(__dirname, 'games');
const sharedDirectory = path.resolve(__dirname, 'shared');

async function copySharedToGames() {
  try {
    const gameDirs = await fse.readdir(gamesRoot, { withFileTypes: true });
    for (let dirent of gameDirs) {
      if (dirent.isDirectory()) {
        const destination = path.join(gamesRoot, dirent.name, 'shared');
        await fse.copy(sharedDirectory, destination, {
          filter: (src) => !/\.test\.(js|ts)$/.test(src),
        });
        console.log(`Copied shared to /src/reactgames/games/${dirent.name}`);
      }
    }
    console.log('Shared folder copied to all games successfully.');
  } catch (error) {
    console.error('Error copying shared folder:', error);
  }
}

module.exports = copySharedToGames;
