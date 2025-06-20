import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Temporizador from './components/Home';

document.addEventListener('DOMContentLoaded', () => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    let contador = 0;

    const renderizar = () => {
        root.render(<Temporizador segundos={contador} />);
    };

    // Render inicial
    renderizar();

    // Cada segundo, incrementamos y volvemos a renderizar
    setInterval(() => {
        contador += 1;
        renderizar();
    }, 1000);
});