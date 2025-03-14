// src/pages/ResultadoFracaso.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResultadoFracaso = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    // Opcional: reinicia la trivia o navega a la página de inicio
    navigate('/');
  };

  return (
    <div className="resultado-container">
      <h1>¡Lo sentimos!</h1>
      <p>No respondiste correctamente todas las preguntas.</p>
      {/* Puedes incluir una imagen de fracaso o animar al usuario a reintentar */}
      <img src="/assets/images/fracaso.webp" alt="Fracaso" className="resultado-imagen" />
      <button className="btn-retry" onClick={handleRetry}>Intentarlo de nuevo</button>
    </div>
  );
};

export default ResultadoFracaso;
