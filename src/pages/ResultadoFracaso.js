// src/pages/ResultadoFracaso.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultadoFracaso = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    // Navega al inicio de la trivia en lugar del home
    navigate('/trivia');
  };

  return (
    <div className="resultado-fracaso-container">
        <img src="/assets/images/tucanitoFracaso.webp" alt="Fracaso" className="tucanitoFracaso" />
        <h1 className="resultado-fracaso-title">¡Uuupps!</h1>
        <h2 className='resultado-fracaso-subtitle'>
          Parece que Tucanito movió <br/>las orejas con sorpresa…
        </h2>
        <div className="divider">
            <hr className="line left" />
            <img src="/assets/icons/flechaAbajoRoja.png" alt="Flecha" className="arrow" />
            <hr className="line right" />
        </div>
        <p className="resultado-fracaso-text">
          Pero tranqui, ¡acá creemos en las <br /> segundas oportunidades!
        </p>
        <div className="contenedorBotonRestart">
          <button type="submit" className="btn-start" onClick={handleRetry}>
            Volvé a intentarlo.
          </button>
        </div>
        
        <img className='miniLogo' src='/assets/images/logoMini.webp' alt='Mini Logo Tucan' />
        <div className='agradecimientoContainer'>
            <p>
              Ah, hablando de segundas oportunidades… ellos también las merecen. ¡Adoptá y cambiá <strong>una vida para siempre!</strong>
            </p>
        </div>
    </div>
  );
};

export default ResultadoFracaso;
