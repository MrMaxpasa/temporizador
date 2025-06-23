// src/main.js
import React from 'react';
import ReactDOM from 'react-dom';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import Home from './components/Home.jsx';
import '../styles/index.css';

let contador = 0;

// Función que renderiza tu <Home> con el segundo actual
function renderizar() {
  ReactDOM.render(
    <Home segundos={contador} />,
    document.getElementById('root')
  );
}

// Render inicial en 00:00:00
renderizar();

// Cada segundo incrementa y vuelve a renderizar
setInterval(() => {
  contador += 1;
  renderizar();
}, 1000);
