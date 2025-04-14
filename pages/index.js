imimport { predictMines } from './predict';

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
      <h3>Safe Tiles:</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 60px)', gap: '10px' }}>
        {result.map((tile, i) => (
          <div
            key={i}
            style={{
              width: 60,
              height: 60,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: tile === 'bomb' ? '#ff4d4f' : '#52c41a',
              color: 'white',
              borderRadius: 10,
            }}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}￼Enter
