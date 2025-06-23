import React from 'react';
import FlipDigit from './FlipDigit';
import '../../styles/index.css'; // Asegúrate de que la ruta apunte a tu CSS de animación

export default function Home({ segundos }) {
  // Calcula horas, minutos y segundos a partir de "segundos"
  const hrs = Math.floor(segundos / 3600);
  const mins = Math.floor((segundos % 3600) / 60);
  const secs = segundos % 60;

  // Formatea con dos dígitos ("5" → "05")
  const fmt = n => String(n).padStart(2, '0');

  return (
    <div className="temporizador">
      <FlipDigit value={fmt(hrs)} />
      <span className="separador">:</span>
      <FlipDigit value={fmt(mins)} />
      <span className="separador">:</span>
      <FlipDigit value={fmt(secs)} />
    </div>
  );
}