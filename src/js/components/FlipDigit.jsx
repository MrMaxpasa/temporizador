import React, { useState, useEffect } from 'react';
import '../../styles/index.css';

export default function FlipDigit({ value }) {
  const [prev, setPrev] = useState(value);
  const [flipping, setFlipping] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    if (prev !== value) {
      setFlipping(true);
      setShowNext(false);

      // Después de 200ms (fold), montamos la capa .next
      const t1 = setTimeout(() => setShowNext(true), 200);

      // Tras otros 200ms (unfold), cerramos flipping y actualizamos prev
      const t2 = setTimeout(() => {
        setFlipping(false);
        setPrev(value);
      }, 400);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [value, prev]);

  return (
    <span className={`digito${flipping ? ' flipping' : ''}`}>
      {/* Static half: siempre muestra el nuevo valor */}
      <span className="base">
        <span className="inner">{value}</span>
      </span>

      {/* Cara superior plegable: muestra el valor anterior */}
      <span className="current">
        <span className="inner">{prev}</span>
      </span>

      {/* Cara inferior desplegable: muestra el nuevo valor */}
      {showNext && (
        <span className="next">
          <span className="inner">{value}</span>
        </span>
      )}
    </span>
  );
}
