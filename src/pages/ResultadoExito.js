// src/pages/ResultadoExito.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultadoExito = () => {
  const navigate = useNavigate();

  const handleRetake = () => {
    // Opcional: navega a la página de inicio o reinicia la trivia
    navigate('/');
  };

  return (
    <div className="resultado-exito-container">
      <img src="/assets/images/tucanitoExito.webp" alt="Éxito" className="tucanitoExito" />
      <img className='miniLogo' src='/assets/images/logoMini.webp' alt='Mini Logo Tucan' />
      <h1 className="resultado-exito-title">¡Muy bien! <br />Lo lograste</h1>
      <div className="divider">
        <hr className="line left" />
        <img src="/assets/images/flechaAbajo.webp" alt="Flecha" className="arrow" />
        <hr className="line right" />
      </div>
      <p className="resultado-exito-text">Se nota que sos un verdadero amigo de Tucanito porque la tenés clarísima sobre él. <br /> <strong>¡Y eso nos encanta!</strong></p>
      <div className='agradecimientoContainer'>
            <p>Como agradecimiento a tu sabiduría, ya estás participando por increíbles premios.</p>
      </div>
      <button className="resultado-exito-btn" onClick={handleRetake}>
        Volver al inicio
      </button>
    </div>
  );
};

export default ResultadoExito;
