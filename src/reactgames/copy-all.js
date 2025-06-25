const path = require('path');

const copyShared = require('./copy-shared.js');
const copyGames = require('./copy-games.js');

async function runAll() {
  await copyShared();
  await copyGames();
}

runAll();
