export function predictMines({ serverSeed, clientSeed, nonce, bombs }) {
  const crypto = require('crypto');

  function getTileIndex(hash, mod) {
    const intValue = parseInt(hash.slice(0, 8), 16);
    return intValue % mod;
  }

  const boardSize = 25;
  const hashInput = `${serverSeed}:${clientSeed}:${nonce}`;
  const hash = crypto.createHash('sha256').update(hashInput).digest('hex');

  const positions = new Set();
  while (positions.size < bombs) {
    const index = getTileIndex(hash.slice(positions.size * 8), boardSize);
    positions.add(index);
  }

  const board = Array(boardSize).fill('safe');
  for (let pos of positions) board[pos] = 'bomb';

  return board;
    
