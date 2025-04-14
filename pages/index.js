import { useState } from 'react';
import { predictMines } from '../predict';

export default function Home() {
  const serverSeed = 'f15c8392f5b7d5774b49b338c5b446dd011b497c4e1';
  const clientSeed = 'ab421e4965aaa131f3d';
  const bombs = 3;

  const [nonce, setNonce] = useState(3);
  const result = predictMines({ serverSeed, clientSeed, nonce, bombs });

  const handleNext = () => {
    setNonce(nonce + 1);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h1>BC.Game Mines Predictor</h1>
      <p><strong>Server Seed:</strong> {serverSeed}</p>
      <p><strong>Client Seed:</strong> {clientSeed}</p>
      <p><strong>Nonce:</strong> {nonce}</p>
      <p><strong>Bombs:</strong> {bombs}</p>

      <h2>Safe Tiles:</h2>
      <ul>
        {result.safeTiles.map((tile, i) => (
          <li key={i}>Tile {tile + 1}</li>
        ))}
      </ul>

      <button onClick={handleNext} style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        marginTop: '20px'
      }}>
        Next
      </button>
    </div>
  );
  }
