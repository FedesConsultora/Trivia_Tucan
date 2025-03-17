// src/pages/Trivia.js
import React, { useEffect } from 'react';
import FormTrivia from '../components/FormTrivia';
import { useSoundContext } from '../context/SoundContext';

const Trivia = () => {
  const { playInicio, stopInicio } = useSoundContext();

  useEffect(() => {
    playInicio(); // Sonido de fondo al iniciar la trivia

    return () => stopInicio(); // Se detiene al desmontar
  }, [playInicio, stopInicio]);

  return (
    <div className="trivia-container">
      <div className="border-Container">
        <img src="/assets/images/tucanitoDerecha.webp" className="tucanitoFondo" alt="tucanitoLogo" />
        <div className="contenedorMinilogo">
          <img src="/assets/images/logoMini.webp" alt="Logo" className="Minilogo" />
        </div>
        <h1 className="trivia-title">
          ¿Listo para <span className="conocer">conocer</span><br /> 
          <span className="miMundo">mi mundo?</span>
        </h1>
        <div className="divider">
          <hr className="line left" />
          <img src="/assets/icons/flechaAbajoRoja.png" alt="Flecha" className="arrow" />
          <hr className="line right" />
        </div>
        <p className="trivia-subtitle">
          Registrate y participá <br /> 
          <span className="por">por <strong className="increiblesPremios">increíbles premios.</strong></span>
        </p>
      </div>
      <FormTrivia />
    </div>
  );
};

export default Trivia;
