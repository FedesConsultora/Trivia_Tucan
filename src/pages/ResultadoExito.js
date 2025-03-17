// src/pages/ResultadoExito.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSoundContext } from '../context/SoundContext';

const ResultadoExito = () => {
  const { playResultadoExito } = useSoundContext();

  useEffect(() => {
    playResultadoExito(); // Reproduce el sonido de éxito cuando se carga la página

    return () => {
      // Aquí podés detener otros sonidos si es necesario al desmontar
    };
  }, [playResultadoExito]);

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
            <img src="/assets/images/flechaAbajo.webp" alt="Flecha" className="arrow" />
            <p>Como agradecimiento a tu sabiduría, ya estás participando por increíbles premios.</p>
      </div>
      <div className='aviso'>Si resultás ganador, nos pondremos en contacto con vos. ¡Mucha suerte!</div>
    </div>
  );
};

export default ResultadoExito;
