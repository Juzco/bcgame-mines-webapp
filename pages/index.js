impoimport { predictMines } from './predict';

export default function Home() {
  const serverSeed = 'f15c8392f5b7d5774b49b338c5b446dd011b497c4e1';
  const clientSeed = 'ab421e4965aaa131f3d';
  const nonce = 3;
  const bombs = 3;

  const result = predictMines({ serverSeed, clientSeed, nonce, bombs });

  return (
    <div style={{ fontFamily: 'Arial', padding: 20 }}>
      <h1>BC.Game Mines Predictor</h1>
      <p>Server Seed: {serverSeed}</p>
      <p>Client Seed: {clientSeed}</p>
      <p>Nonce: {nonce}</p>
      <p>Bombs: {bombs}</p>
      <h2>Predicted Safe Tiles:</h2>
      <ul>
        {result.map((tile, index) => (
          <li key={index}>Tile {tile + 1}</li>
        ))}
      </ul>
    </div>
  );
}￼Enter
