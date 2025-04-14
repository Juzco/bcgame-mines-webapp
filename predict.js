import crypto from 'crypto';

export function predictMines({ serverSeed, clientSeed, nonce, bombs }) {
  const totalTiles = 25;
  const hash = crypto
    .createHmac('sha256', serverSeed)
    .update(`${clientSeed}-${nonce}`)
    .digest('hex');

  const safeTiles = [];
  let i = 0;
  while (safeTiles.length < totalTiles - bombs) {
    const start = i * 2;
    const segment = hash.slice(start, start + 2);
    const num = parseInt(segment, 16);
    const tile = num % totalTiles;
    if (!safeTiles.includes(tile)) {
      safeTiles.push(tile);
    }
    i++;
  }

  return safeTiles;
}
