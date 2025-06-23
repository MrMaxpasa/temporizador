// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";


import Home from './components/Home.jsx';
import '../styles/index.css';
import Particles from './Particles.jsx';

let contador = 0;
let paused = false;
let timerId = null;

const rootElement = document.getElementById('root');

function renderizar() {
  ReactDOM.render(
    <>
    <Home
      segundos={contador}
      paused={paused}
      onReset={resetTimer}
      onTogglePause={togglePause}
    /> 
    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
</div>
</>
    ,
    rootElement
  );
}

function tick() {
  contador += 1;
  renderizar();
}

function startTimer() {
  if (!timerId) {
    timerId = setInterval(tick, 1000);
  }
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function togglePause() {
  paused = !paused;
  if (paused) {
    stopTimer();
  } else {
    startTimer();
  }
  renderizar();
}

function resetTimer() {
  contador = 0;
  renderizar();
}


startTimer();
renderizar();
