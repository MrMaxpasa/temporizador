import React from 'react';
import FlipDigit from './FlipDigit';
import '../../styles/index.css'; // Asegúrate de que la ruta apunte a tu CSS de animación


export default function Home({ segundos, paused, onReset, onTogglePause }) {
  const hrs = Math.floor(segundos / 3600);
  const mins = Math.floor((segundos % 3600) / 60);
  const secs = segundos % 60;
  const fmt = n => String(n).padStart(2, '0');

  return (
    <div className="temporizador" style={{ display: 'flex', alignItems: 'center' }}>
      <FlipDigit value={fmt(hrs)} />
      <span className="separador">:</span>
      <FlipDigit value={fmt(mins)} />
      <span className="separador">:</span>
      <FlipDigit value={fmt(secs)} />

      <button
        onClick={onTogglePause}
        style={{
          marginLeft: '1rem',
          padding: '0.5rem 1rem',
          fontSize: '1.2rem',
          borderRadius: '0.3rem',
          cursor: 'pointer'
        }}
      >
        {paused ? 'Continue' : 'Pause'}
      </button>

      <button
        onClick={onReset}
        style={{
          marginLeft: '0.5rem',
          padding: '0.5rem 1rem',
          fontSize: '1.2rem',
          borderRadius: '0.3rem',
          cursor: 'pointer'
        }}
      >
        Reset
      </button>
    </div>
	
  );
}

