import React from 'react';
import ReactDOM from 'react-dom';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Componente principal
import Home from './components/Home.jsx';
import '../styles/index.css';

document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  let contador = 0;

  const renderizar = () => {
    root.render(<Home segundos={contador} />);
  };

  // Render inicial
  renderizar();

  // Cada segundo incrementa y renderiza de nuevo
  setInterval(() => {
    contador += 1;
    renderizar();
  }, 1000);
});