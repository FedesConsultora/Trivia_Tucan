// src/pages/Trivia.js
import React, { useEffect, useRef } from 'react';
import FormTrivia from '../components/FormTrivia';

const Trivia = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Intentamos reproducir el audio cuando se monte el componente.
    // Muchos navegadores bloquean el autoplay con sonido a menos que haya interacción,
    // por lo que podrías necesitar un botón o evento de usuario para desmutearlo.
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('Autoplay blocked:', error);
      });
    }
  }, []);

  return (
    <div className="trivia-container">
      {/* Música de fondo (solo se carga en Trivia) */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/assets/audio/INICIO.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      
      <div className="border-Container">
        <img src="/assets/images/tucanitoDerecha.webp" className="tucanitoFondo" alt="tucanitoLogo" />
        <div className="contenedorMinilogo">
          <img src="/assets/images/logoMini.webp" alt="Logo" className="Minilogo" />
        </div>
        <h1 className="trivia-title">
          ¿Listo para <span className="conocer">conocer</span>
          <br /> 
          <span className="miMundo">mi mundo?</span>
        </h1>
        <div className="divider">
          <hr className="line left" />
          <img src="/assets/icons/flechaAbajoRoja.png" alt="Flecha" className="arrow" />
          <hr className="line right" />
        </div>
        <p className="trivia-subtitle">
          Registrate y participá 
          <br /> 
          <span className="por">
            por <strong className="increiblesPremios">increíbles premios.</strong>
          </span>
        </p>
      </div>
      <FormTrivia />
    </div>
  );
};

export default Trivia;
